import  express from 'express';
import mongoose from 'mongoose';
import apiRoute from './routes/api.js';
import { DB_CONNECT } from './utils/constants.js';


const app = express();

mongoose.connect(DB_CONNECT).then(()=>{
    console.log("Db connection established =------------------------")
}).catch(err =>console.error(err));
const PORT=8000

app.use(express.json());
app.use('/api/', apiRoute);
app.listen(PORT,()=>console.log('server is running'))