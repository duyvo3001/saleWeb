"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor({ id, name, email, phoneNumber }) {
        if (id !== null)
            this.id = id;
        if (name !== null)
            this.name = name;
        if (email !== null)
            this.email = email;
        if (phoneNumber !== null)
            this.phoneNumber = phoneNumber;
    }
}
exports.User = User;
//# sourceMappingURL=user.model.js.map