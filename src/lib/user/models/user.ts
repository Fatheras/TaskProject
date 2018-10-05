import Sequelize from 'sequelize';
import db from'../../db/models/db';

const User = db.define('user', {
    firstName: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true,
            len: [3, 20],
        }
    },
    lastName: {
        type: Sequelize.STRING,
    },
    phone: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true,
            len: [4, 15],
        }
    },
    address: {
        type: Sequelize.STRING,
    }
});

export default User;

