import GenericMakeFileCommand from "../base/GenericMakeFileCommand";

export default class MakeListenerCommand extends GenericMakeFileCommand
{
    constructor() {
        super('make:listener', 'Create a new model', 'Listener', ['name'], {
            endsWith: 'Listener'
        });
    }
}