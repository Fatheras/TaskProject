import { Router } from "express";
import { UserController } from "../controllers/user-controller";
import passport = require("passport");
import { AuthController } from "../../authentication/controllers/auth-controller";
import { handleError } from "../../tools/handleError";

class UserRouter {

    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes() {
        this.router.get("/", handleError(UserController.getAllUsers));
        this.router.get("/me", passport.authenticate("jwt", {session: false}), (req, res) => {

            res.json({
                message: "You made it to the secure route",
                user: req.user,
                token: req.query.secret_token,
            });
        });
        this.router.get("/:id", handleError(UserController.getUser));

        this.router.delete("/:id", handleError(UserController.deleteUser));
        this.router.put("/:id", handleError(UserController.updateUser));
        this.router.post("/signup", handleError(AuthController.signUp));
        this.router.post("/login", handleError(AuthController.signIn));
    }
}

const userRoutes = new UserRouter();

export default userRoutes.router;
