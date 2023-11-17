import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller("users")
export class UserController {
  @Get()
  getUser(): string {
    return "hello user";
  }

  @Post()
  createUser(): string {
    return "create user";
  }

  @Get("/:id")
  detailUser(): string {
    return "detail user";
  }

  @Put("/:id")
  updateUser(): string {
    return "update user";
  }

  @Delete("/:id")
  deleteUser(): string {
    return "delete user";
  }
}
