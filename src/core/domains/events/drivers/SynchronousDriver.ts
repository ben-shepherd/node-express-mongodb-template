import { App } from '@src/core/services/App';
import { IEvent } from '../interfaces/IEvent';
import IEventDriver from '../interfaces/IEventDriver';

export default class SynchronousDriver implements IEventDriver
{
    /**
     * Run all the events immediatly 
     * @param event 
     */
    async handle(event: IEvent) {
        const eventName = event.name
        const listenerConstructors = App.container('events').getListenersByEventName(eventName)

        for(const listenerCtor of listenerConstructors) {
            const listener = new listenerCtor();
            await listener.handle(event.payload);
        }
    }
}