import Sequelize from 'sequelize';
import db from '../../db/models/db';

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true,
            len: [3, 30],
        }
    },
    cost: {
        type: Sequelize.INTEGER,
    },
    status: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true,
            len: [4, 15],
        }
    },
    category: {
        type: Sequelize.STRING,
    },
    time: {
        type: Sequelize.TIME,
    },
    description: {
        type: Sequelize.STRING,
    },
    owner: {
        type: Sequelize.INTEGER,
    },
});

export default User;

