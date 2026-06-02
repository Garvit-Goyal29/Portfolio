import express from 'express'
import cors from 'cors'
import 'dotenv/config';
import handleContactFrom from './route/handleContactFrom.js'

const app = express();
const PORT = process.env.PORT || 5000;
const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "https://www.garvit.space",
  "https://garvit.space"
];

app.use(express.json())
app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error(`CORS blocked origin: ${origin}`));
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: true
}));

app.use('/api',handleContactFrom);
app.get("/health", (req, res) => {
  res.status(200).json({ success: true, message: "Backend is running" });
});

app.listen(PORT,()=>{
    console.log("Server started at ",PORT);
})
