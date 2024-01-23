import { JWT_TOKEN_SECRET, StatusCode } from "../utils/constants.js";
import { jsonGenerate } from "../utils/helper.js";
import Jwt from 'jsonwebtoken';

const AuthMiddleware = (req,res,next) => {
    if (req.headers["auth"] === undefined){
        return res.json(jsonGenerate(StatusCode.AUTH_ERROR,"Access Denied"));
    }

    const token = request.headers["auth"];

    try{
        const decode= Jwt.verify(token,JWT_TOKEN_SECRET);
        console.log(decode);

        req.userId=decode.userId;
        return next();

    } catch (error){
        return res.json(jsonGenerate(StatusCode.UNPROCESSABLE_ENTITY,"Invalid Token"));
    }
};

export default AuthMiddleware;