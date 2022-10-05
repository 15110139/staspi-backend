
import { Router } from 'express';
import { ping } from './ping.controller';
const pingRouter = Router();
pingRouter.get('/ping', ping);
export { pingRouter };
