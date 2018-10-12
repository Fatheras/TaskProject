import * as http from "http";
import * as express from "express";
import { Router } from "express";
import taskRouter from "./lib/tasks/routes/task-router";
import * as bodyParser from "body-parser";
import userRouter from "./lib/user/routes/user-router";
import dealRouter from "./lib/deals/routes/deal-router";
import { errorLog, successLog } from "./lib/tools/logger-service";
import passport = require("passport");
import AuthService from "./lib/authentication/auth-service";

export class Server {

    public app;
    private router;

    constructor() {
        this.app = express();
        this.router = Router();

        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(passport.initialize());

        AuthService.signUp();
        AuthService.logIn();
        AuthService.checkAccess();

        this.setRoutes();
    }

    private setRoutes() {
        this.app.use("/api/v1", this.router);
        this.router.use("/tasks", taskRouter);
        this.router.use("/users", userRouter);
        this.router.use("/deals", dealRouter);
    }
}

const server = new Server();

http.createServer(server.app).listen(process.env.PORT, () => successLog.info("Server listening"));
