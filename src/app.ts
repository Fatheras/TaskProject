import * as http from "http";
import * as express from "express";
import taskRouter from "./lib/tasks/routes/task-router";

export class Server {

    public app;

    constructor() {
        this.app = express();

        this.setRoutes();
    }

    private setRoutes() {
        this.app.use("/api/v1/tasks", taskRouter);
    }
}

const server = new Server();

http.createServer(server.app).listen(8080);
