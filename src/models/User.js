import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type: 'string',
    },
    username:{
        type: 'string',
        min:3,
        max:32,
        required: true
    },
    password:{
        type: 'string',
        min:3,
        max:32,
        required: true
    },
    email:{
        type: 'string',
        min:7,
        max:32,
        required: true
    },
    date:{
        type:Date,
        default:Date.now,
    }
})


export default mongoose.model("User",userSchema);