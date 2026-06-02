import express from 'express'
import cors from 'cors'
import 'dotenv/config';
import handleContactFrom from './route/handleContactFrom.js'

const app = express();
const PORT = 5000;

app.use(express.json())
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://www.garvit.space/"
    ],
    methods: [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ],
    credentials: true
  })
);

app.use('/api',handleContactFrom);

app.listen(PORT,()=>{
    console.log("Server started at ",PORT);
})