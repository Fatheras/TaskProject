import * as http from 'http';
import * as express from 'express';
import userRouter from './lib/user/routes/user'; 

export class Server {

    public app;

    constructor() {
        this.app = express();

        this.setRoutes();
    } 

    private setRoutes() {
        this.app.use('/', userRouter);
    }
} 

const server = new Server();

http.createServer(server.app).listen(8080, () => {
    console.log('listening on port 8080')
});
