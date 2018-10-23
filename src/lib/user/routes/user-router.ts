import { Router } from "express";
import { UserController } from "../controllers/user-controller";
import passport = require("passport");
import { AuthController } from "../../authentication/controllers/auth-controller";
import { handleError } from "../../tools/handleError";
import * as joi from "joi";
import CheckParamsMiddleware from "../../server/models/check-params.middleware";

class UserRouter {

    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes() {
        this.router.get("/", handleError(UserController.getAllUsers));
        this.router.get("/me", passport.authenticate("jwt", { session: false }), (req, res) => {

            res.json({
                message: "You made it to the secure route",
                user: req.user,
                token: req.query.secret_token,
            });
        });
        this.router.get("/:id", handleError(UserController.getUser));

        this.router.delete("/:id", handleError(UserController.deleteUser));
        this.router.put("/:id", handleError(UserController.updateUser));
        this.router.post("/signup", CheckParamsMiddleware.validateParamsJoi(joi.object().keys({
            email: joi.string().email({ minDomainAtoms: 2 }).required(),
            phone: joi.string().trim().regex(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/).required(),
            password: joi.string().min(3).max(30).required(),
        })),
            handleError(AuthController.signUp));
        this.router.post("/login", CheckParamsMiddleware.validateParamsJoi(joi.object().keys({
            email: joi.string().email({ minDomainAtoms: 2 }).required(),
            password: joi.string().min(3).max(30).required(),
        })), handleError(AuthController.signIn));
    }
}

const userRoutes = new UserRouter();

export default userRoutes.router;
