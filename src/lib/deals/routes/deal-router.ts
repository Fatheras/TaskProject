import { Router } from "express";
import { DealController } from "../controllers/deal-controller";

class DealRouter {

    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes() {
        this.router.get("/", DealController.getAllDeals);
        this.router.get("/:id", DealController.getDeal);
        this.router.post("/", DealController.addDeal);
        this.router.put("/:id", DealController.updateDeal);
        this.router.delete("/:id", DealController.deleteDeal);
        this.router.get("/tasks/:id", DealController.getDealsByTaskId);
    }
}

const dealRoutes = new DealRouter();

export default dealRoutes.router;
