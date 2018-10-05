import Sequelize from "sequelize";
import db from "../../db/models/db";

export interface ITask extends  Sequelize.Model<ITask>  {
    name: string;
    cost: number;
    status: string;
    category: string;
    time: string;
    description: string;
    owner: number;
    createdAt: string;
    updatedAt: string;
}

export const Task = db.define<ITask>("task", {
    name: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true,
            len: [3, 30],
        },
    },
    cost: {
        type: Sequelize.INTEGER,
    },
    status: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true,
            len: [4, 15],
        },
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
