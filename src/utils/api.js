import express from "express"
import Register from "../controllers/Register.controller";


const apiRoute=express.route


apiRoute.post('/register', Register);

export default apiRoute;