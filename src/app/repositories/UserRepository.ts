import BaseUserRepository from "../../core/domains/auth/repository/BaseUserRepository";
import { UserData } from "../interfaces/UserData";
import User from "../models/User";

export default class UserRepository extends BaseUserRepository<User, UserData> {

    constructor() {
        super(User);
    }
}