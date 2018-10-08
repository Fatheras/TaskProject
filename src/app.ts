import * as http from "http";
import * as express from "express";
import { Router } from "express";
import taskRouter from "./lib/tasks/routes/task-router";

export class Server {

    public app;
    private router;

    constructor() {
        this.app = express();
        this.router = Router();

        this.setRoutes();
    }

    private setRoutes() {
        this.app.use("/api/v1", this.router);
        this.router.use("/tasks", taskRouter);
    }
}

const server = new Server();

http.createServer(server.app).listen(8080);
