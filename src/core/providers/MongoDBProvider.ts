import mongodbConfig from '@config/database/mongodb';
import BaseProvider from "../base/Provider";
import IMongoDbConfig from "../domains/database/mongodb/interfaces/IMongoDbConfig";
import MongoDB from "../domains/database/mongodb/services/MongoDB";
import { App } from "../services/App";

export default class MongoDBProvider extends BaseProvider
{
    protected config: IMongoDbConfig = mongodbConfig;

    public async register(): Promise<void>
    {
        this.log('Registering MongoDBProvider');
        
        App.setContainer('mongodb', new MongoDB(this.config))
    }

    public async boot(): Promise<void>
    {
        this.log('Booting MongoDBProvider');

        const mongodb = App.container('mongodb');
        mongodb.init();
        await mongodb.connectDefaultConnection();
        await mongodb.connectKeepAlive()
    }
}