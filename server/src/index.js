import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // Allow frontend to connect
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));
app.use(express.json());
app.use(cookieParser());


app.get("/",(req,res)=>{
  res.send("SERVER RUNNING...")
})




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
