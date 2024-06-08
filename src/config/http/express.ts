import express from 'express';

import IExpressConfig from '../../core/interfaces/IExpressConfig';
import bodyParser from 'body-parser';
import cors from 'cors'

const config: IExpressConfig = {
    port: parseInt(process.env.PORT ?? '3000'),
    
    globalMiddlewares: [
        express.json(),
        bodyParser.urlencoded({ extended: true }),
        cors()
    ]
};

export default config