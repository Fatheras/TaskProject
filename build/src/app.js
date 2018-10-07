"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const express = require("express");
const task_router_1 = require("./lib/tasks/routes/task-router");
class Server {
    constructor() {
        this.app = express();
        this.setRoutes();
    }
    setRoutes() {
        this.app.use("/api/v1/tasks", task_router_1.default);
    }
}
exports.Server = Server;
const server = new Server();
http.createServer(server.app).listen(8080);
//# sourceMappingURL=app.js.map