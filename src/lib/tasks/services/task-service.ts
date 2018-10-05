import User from "../../user/models/user";
import {Task, ITask} from "../models/task";

export default class TaskService {

    public static addTask() {
        return 1;
    }

    public static getTask() {
        return 1;
    }

    public static getAllTask() {
        return 1;
    }

    public static deleteTask() {
        return 1;
    }

    public static updateTask() {
        return 1;
    }

    public static registerUser(task: ITask, user: IUser) {
       
        Task.ad(task.id)
        return 1;
    }

    public static changeStatus(task: ITask, status: string) {
        return 1;
    }

}
