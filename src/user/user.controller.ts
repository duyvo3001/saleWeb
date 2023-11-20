/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Post, Put, Param, Body, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { ResponseData } from "src/global/globalClass";
import { HttpMessage, HttpStatus } from "src/global/globalEnum";
import { User } from "src/models/user.model";
import { UserDto } from "src/dataTranferObject/User.dto";

@Controller("users")
export class UserController {
  constructor(private readonly usersevervice: UserService) { }

  @Get()
  getUser(): ResponseData<User[]> {
    try {
      return new ResponseData<User[]>(this.usersevervice.getUser(), HttpStatus.SUCCESS, HttpMessage.SUCCESS,);
    } catch (error) {
      return new ResponseData<User[]>(null, HttpStatus.ERROR, HttpMessage.ERROR,);
    }
  }

  @Post()
  createUser(@Body(new ValidationPipe()) userDto: UserDto): ResponseData<UserDto> {
    try {
      return new ResponseData<UserDto>(userDto, HttpStatus.SUCCESS, HttpMessage.SUCCESS,);
    } catch (error) {
      return new ResponseData<UserDto>(null, HttpStatus.ERROR, HttpMessage.ERROR,);
    }
  }

  @Get("/:id")
  detailUser(@Param("id") id: number): ResponseData<User> {
    try {
      return new ResponseData<User>(this.usersevervice.detailUser(id),HttpStatus.SUCCESS, HttpMessage.SUCCESS,);
    } catch (error) {
      return new ResponseData<User>(null, HttpStatus.ERROR, HttpMessage.ERROR);
    }
  }

  @Put("/:id")
  updateUser(): ResponseData<string> {
    try {
      return new ResponseData<string>(this.usersevervice.updateUser(),HttpStatus.SUCCESS,HttpMessage.SUCCESS,);
    } catch (error) {
      return new ResponseData<string>(null, HttpStatus.ERROR, HttpMessage.ERROR,
      );
    }
  }

  @Delete("/:id")
  deleteUser(): ResponseData<string> {
    try {
      return new ResponseData<string>(this.usersevervice.deleteUser(),HttpStatus.SUCCESS,HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<string>(null,HttpStatus.ERROR, HttpMessage.ERROR,
      );
    }
  }
}
