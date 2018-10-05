import { Router } from 'express';
import { UserController } from '../controllers/user-controller';

class UserRouter {

    public router: Router

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes() {
        this.router.get('/user', UserController.getUser);
    }
}

const userRoutes = new UserRouter();

export default userRoutes.router;