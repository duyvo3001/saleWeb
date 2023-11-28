import { UserService } from "./user.service";
import { ResponseData } from "src/global/globalClass";
import { User } from "src/models/user.model";
import { UserDto } from "src/dataTranferObject/User.dto";
export declare class UserController {
    private readonly usersevervice;
    constructor(usersevervice: UserService);
    getUser(): ResponseData<User[]>;
    createUser(userDto: UserDto): ResponseData<UserDto>;
    detailUser(id: number): ResponseData<User>;
    updateUser(id: string, userDto: UserDto): ResponseData<User>;
    deleteUser(): ResponseData<string>;
}
