import { check } from "express-validator"

export const LoginSchema = [

    check('username', 'username is required').exists().
    isAlphanumeric().withMessage("Username should be Alphanumeric character only").
    trim().isLength({min:3, max:40}),

    check('password', 'password is required').exists().
    isLength({min:3, max:40}).trim(),


]