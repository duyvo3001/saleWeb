/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { UserDto } from "src/dataTranferObject/User.dto";
import { User } from "src/models/user.model";
import { UserModule } from "./user.module";
@Injectable()
export class UserService {
  private users: User[] = [
    { id: 1, name: "duyvo1", email: "1duyvo3001@gmail.com", phoneNumber: "10964068675", },
    { id: 2, name: "duyvo2", email: "2duyvo3001@gmail.com", phoneNumber: "20964068675", },
    { id: 3, name: "duyvo3", email: "3duyvo3001@gmail.com", phoneNumber: "30964068675", },
  ];

  getUser(): User[] {
    return this.users;
  }

  createUser(userDto : UserDto): UserModule {
    const user : UserModule ={
      id : Math.random(),
      ... userDto
    };
    this.users.push(user)
    return this.users;
  }

  detailUser(id: number): User {
    return this.users.find(item => item.id == id);
  }

  updateUser(): string {
    return "update user";
  }

  deleteUser(): string {
    return "delete user";
  }
}
