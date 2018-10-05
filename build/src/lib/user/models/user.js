"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../../db/models/db");
const User = db_1.default.define('user', {
    firstName: {
        type: sequelize_1.default.STRING,
        validate: {
            notEmpty: true,
            len: [3, 20],
        }
    },
    lastName: {
        type: sequelize_1.default.STRING,
    },
    phone: {
        type: sequelize_1.default.STRING,
        validate: {
            notEmpty: true,
            len: [4, 15],
        }
    },
    address: {
        type: sequelize_1.default.STRING,
    }
});
exports.default = User;
//# sourceMappingURL=user.js.map