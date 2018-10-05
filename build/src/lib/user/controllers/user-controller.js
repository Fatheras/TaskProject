"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("../services/user-service");
class UserController {
    static getUser(req, res) {
        let user = user_service_1.default.getUser();
        res.send(user);
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user-controller.js.map