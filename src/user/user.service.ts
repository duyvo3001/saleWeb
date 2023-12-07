/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { UserDto } from "src/dataTranferObject/User.dto";
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

  createUser(userDto: UserDto): User {
    const user: User = {
      id: Math.random(),
      ...userDto
    };
    this.users.push(user)
    return user;
  }

  detailUser(params: number): User { 
    console.log(params);
    // return this.users.find(item => item.id == id);
    return this.users[1]
  }

  updateUser(userDto: UserDto, ID: number): User {
    console.log(userDto, ID)
    // const index = this.users.findIndex(item => item.id == id);
    // const index = 1;
    // this.users[index].email = userDto?.email;
    // this.users[index].name = userDto?.name;
    // this.users[index].phoneNumber = userDto?.phoneNumber;
    return this.users[1];
  }

  deleteUser(): string {
    return "delete user";
  }
}
