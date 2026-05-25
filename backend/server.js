import express from 'express'
import cors from 'cors'
import 'dotenv/config';
import handleContactFrom from './route/handleContactFrom.js'

const app = express();
const PORT = 5000;

app.use(express.json())
app.use(cors())

app.use('/api',handleContactFrom);

app.listen(PORT,()=>{
    console.log("Server started at ",PORT);
})