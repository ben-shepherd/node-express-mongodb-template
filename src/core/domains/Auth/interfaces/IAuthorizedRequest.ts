import { Request } from 'express';

import BaseUserModel from '../models/BaseUserModel';

export default interface IAuthorizedRequest<UserModel extends BaseUserModel = BaseUserModel> extends Request {
    user?: UserModel | null;
}