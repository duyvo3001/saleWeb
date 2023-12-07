"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 10:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const common_1 = __webpack_require__(6);
const user_service_1 = __webpack_require__(11);
const globalClass_1 = __webpack_require__(12);
const globalEnum_1 = __webpack_require__(13);
const User_dto_1 = __webpack_require__(14);
let UserController = class UserController {
    constructor(usersevervice) {
        this.usersevervice = usersevervice;
    }
    getUser() {
        try {
            return new globalClass_1.ResponseData(this.usersevervice.getUser(), globalEnum_1.HttpStatus.SUCCESS, globalEnum_1.HttpMessage.SUCCESS);
        }
        catch (error) {
            return new globalClass_1.ResponseData(null, globalEnum_1.HttpStatus.ERROR, globalEnum_1.HttpMessage.ERROR);
        }
    }
    createUser(userDto) {
        try {
            console.log(userDto);
            return new globalClass_1.ResponseData(this.usersevervice.createUser(userDto), globalEnum_1.HttpStatus.SUCCESS, globalEnum_1.HttpMessage.SUCCESS);
        }
        catch (error) {
            return new globalClass_1.ResponseData(null, globalEnum_1.HttpStatus.ERROR, globalEnum_1.HttpMessage.ERROR);
        }
    }
    detailUser(id) {
        try {
            console.log(id);
            return new globalClass_1.ResponseData(this.usersevervice.detailUser(id), globalEnum_1.HttpStatus.SUCCESS, globalEnum_1.HttpMessage.SUCCESS);
        }
        catch (error) {
            return new globalClass_1.ResponseData(null, globalEnum_1.HttpStatus.ERROR, globalEnum_1.HttpMessage.ERROR);
        }
    }
    updateUser(userDto, ID) {
        try {
            console.info(ID);
            return new globalClass_1.ResponseData(this.usersevervice.updateUser(userDto, ID), globalEnum_1.HttpStatus.SUCCESS, globalEnum_1.HttpMessage.SUCCESS);
        }
        catch (error) {
            return new globalClass_1.ResponseData(null, globalEnum_1.HttpStatus.ERROR, globalEnum_1.HttpMessage.ERROR);
        }
    }
    deleteUser() {
        try {
            return new globalClass_1.ResponseData(this.usersevervice.deleteUser(), globalEnum_1.HttpStatus.SUCCESS, globalEnum_1.HttpMessage.SUCCESS);
        }
        catch (error) {
            return new globalClass_1.ResponseData(null, globalEnum_1.HttpStatus.ERROR, globalEnum_1.HttpMessage.ERROR);
        }
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_b = typeof globalClass_1.ResponseData !== "undefined" && globalClass_1.ResponseData) === "function" ? _b : Object)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof User_dto_1.UserDto !== "undefined" && User_dto_1.UserDto) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof globalClass_1.ResponseData !== "undefined" && globalClass_1.ResponseData) === "function" ? _d : Object)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('/:id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", typeof (_e = typeof globalClass_1.ResponseData !== "undefined" && globalClass_1.ResponseData) === "function" ? _e : Object)
], UserController.prototype, "detailUser", null);
__decorate([
    (0, common_1.Put)('/:ID'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('ID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof User_dto_1.UserDto !== "undefined" && User_dto_1.UserDto) === "function" ? _f : Object, Number]),
    __metadata("design:returntype", typeof (_g = typeof globalClass_1.ResponseData !== "undefined" && globalClass_1.ResponseData) === "function" ? _g : Object)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_h = typeof globalClass_1.ResponseData !== "undefined" && globalClass_1.ResponseData) === "function" ? _h : Object)
], UserController.prototype, "deleteUser", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], UserController);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8e443948184bf5332fda")
/******/ })();
/******/ 
/******/ }
;