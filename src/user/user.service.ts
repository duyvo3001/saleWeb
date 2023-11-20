/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { User } from "src/models/user.model";
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

  createUser(): string {
    return "create user";
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
