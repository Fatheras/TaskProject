"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const express = require("express");
const user_1 = require("./lib/user/routes/user");
class Server {
    constructor() {
        this.app = express();
        this.setRoutes();
    }
    setRoutes() {
        this.app.use('/', user_1.default);
    }
}
exports.Server = Server;
const server = new Server();
http.createServer(server.app).listen(8080, () => {
    console.log('listening on port 8080');
});
//# sourceMappingURL=app.js.map