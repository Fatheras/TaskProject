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

<<<<<<< HEAD
        this.router.delete("/:id", UserController.deleteUser);
        this.router.put("/:id", UserController.updateUser);
        this.router.post("/signup",
        passport.authenticate("signup", { session: false }),
            async (req, res, next) => {
                res.send(req.user);
            });
        this.router.post("/login", async (req, res, next) => {
            passport.authenticate("login", async (err, user, info) => {
                try {
                    if (err || !user) {
                        const error = new Error("An Error occured");
                        return next(error);
                    }
                    req.login(user, { session: false }, async (error) => {
                        if (error) {
                            return next(error);
                        }

                        const body = { email: user.email };

                        const token = jwt.sign({ user: body }, process.env.SECRET, {
                            expiresIn: 30,
                        });
                        return res.json(token);
                    });
                } catch (error) {
                    return next(error);
                }
            })(req, res, next);
        });
=======
        this.router.delete("/:id", handleError(UserController.deleteUser));
        this.router.put("/:id", handleError(UserController.updateUser));
        this.router.post("/signup", handleError(AuthController.signUp));
        this.router.post("/login", handleError(AuthController.signIn));
>>>>>>> f9da944511b33d3f4e0f64a265f3e9d9f66e7e34
    }
}

const userRoutes = new UserRouter();

export default userRoutes.router;
