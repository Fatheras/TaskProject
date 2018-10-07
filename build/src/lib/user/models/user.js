"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../../db/models/db");
exports.User = db_1.default.define("user", {
    userId: {
        type: sequelize_1.default.INTEGER,
        primaryKey: true,
    },
    firstName: {
        type: sequelize_1.default.STRING,
        validate: {
            notEmpty: true,
            len: [3, 20],
        },
    },
    lastName: {
        type: sequelize_1.default.STRING,
    },
    phone: {
        type: sequelize_1.default.STRING,
        validate: {
            notEmpty: true,
            len: [4, 15],
        },
    },
    address: {
        type: sequelize_1.default.STRING,
    },
});
//# sourceMappingURL=user.js.map