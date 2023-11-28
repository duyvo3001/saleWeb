"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
let UserService = class UserService {
    constructor() {
        this.users = [
            { id: 1, name: "duyvo1", email: "1duyvo3001@gmail.com", phoneNumber: "10964068675", },
            { id: 2, name: "duyvo2", email: "2duyvo3001@gmail.com", phoneNumber: "20964068675", },
            { id: 3, name: "duyvo3", email: "3duyvo3001@gmail.com", phoneNumber: "30964068675", },
        ];
    }
    getUser() {
        return this.users;
    }
    createUser(userDto) {
        const user = {
            id: Math.random(),
            ...userDto
        };
        this.users.push(user);
        return user;
    }
    detailUser(id) {
        console.log(id);
        return this.users.find(item => item.id == id);
    }
    updateUser(id, userDto) {
        console.log(id);
        const index = 1;
        this.users[index].email = userDto.email;
        this.users[index].name = userDto.name;
        this.users[index].phoneNumber = userDto.phoneNumber;
        return this?.users[index];
    }
    deleteUser() {
        return "delete user";
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=user.service.js.map