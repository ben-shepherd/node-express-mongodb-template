import IExpressConfig from "../interfaces/IExpressConfig";
import Express from "../services/Express"
import Provider from "../base/Provider";
import { initialize } from "express-openapi";
import apiv1 from '../../docs/v1/api'
import path from "path";
import swagger from 'swagger-ui-express'
import { worldsService } from "@src/docs/v1/worlds";
import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export default class OpenApiProvider extends Provider
{
    protected configPath: string = 'src/config/http/express';
    protected config!: IExpressConfig;

    constructor() {
        super();
        this.init()
    }

    public async register(): Promise<void> 
    {
        this.log('Registering OpenApiProvider');
    }

    public async boot(): Promise<void>
    {
        this.log('Booting OpenApiProvider');

        const pathsDir = path.resolve(__dirname, '../../docs/v1/');
        console.log(pathsDir)
        
        await initialize({
            app: Express.getInstance().getApp(),
            apiDoc: apiv1, 
            paths: pathsDir,
            dependencies: [
                worldsService
            ]
        })

        Express.getInstance().getApp().use((err: any, req: Request, res: Response, next: NextFunction) => {
            res.status(err.status || 500).json({ error: err.message });
        });
        

        Express.getInstance().getApp().use('/docs', swagger.serve, swagger.setup(undefined, {
            swaggerUrl: '/docs',
            swaggerOptions:{
                validatorUrl : null
            } 
        }));
    }
}
