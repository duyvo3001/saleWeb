import { UserDto } from "src/dataTranferObject/User.dto";
import { User } from "src/models/user.model";
export declare class UserService {
    private users;
    getUser(): User[];
    createUser(userDto: UserDto): User;
    detailUser(id: number): User;
    updateUser(id: string, userDto: UserDto): User;
    deleteUser(): string;
}
