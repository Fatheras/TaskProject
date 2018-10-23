import * as joi from "joi";
import * as Requests from "../enums/request-verb-enum";

export default class CheckParamsMiddleware {
    public static getCollectionName(req) {
        switch (req.method) {
            case Requests[0]:
                return "query";
            case Requests[1]:
            case Requests[2]:
            case Requests[3]:
                return "body";
        }
    }

    public static validateParamsJoi(schema) {
        return (req, res, next) => {
            const collectionName = CheckParamsMiddleware.getCollectionName(req);
            const result = joi.validate(req[collectionName], schema);
            if (!result.error) {
                next();
            } else {
                res.status(400).send(result.error);
            }
        };
    }

    public static validateSequelizeEntity(entity) {
        return async (req, res, next) => {
            const collectionName = CheckParamsMiddleware.getCollectionName(req);
            const model = entity.build(req[collectionName]);
            try {
                await model.validate();
                next();
            } catch (error) {
                res.status(400).send(error);
            }
        };
    }
}
