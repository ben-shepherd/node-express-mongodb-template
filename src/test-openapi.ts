import 'tsconfig-paths/register';
import Kernel from "./core/kernel";
import ExpressListenerProvider from "./core/providers/ExpressListenerProvider";
import ExpressProvider from "./core/providers/ExpressProvider";
import MongoDBProvider from "./core/providers/MongoDBProvider";
import OpenApiProvider from "./core/providers/OpenApiProvider";
import RoutesProvider from './core/providers/RoutesProvider';

(async() => {
    require('dotenv').config();

    await Kernel.boot({
        environment: 'testing',
        providers: [
            new MongoDBProvider(),
            new ExpressProvider(),
            new RoutesProvider(),
            new OpenApiProvider(),
            new ExpressListenerProvider()
        ]
    })

    // add your tests here below



})();