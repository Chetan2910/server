import { validationResult } from "express-validator"
import { jsonGenerate } from "../utils/helper.js";
import { StatusCode } from "../utils/constants.js";

export const createTodo = (req, res) => {
   
    const error=validationResult(req);
    if(!error.isEmpty()){
        return res.json(jsonGenerate(StatusCode.VALIDATION_ERROR, "Todo is required", error.mapped()));
    }
};