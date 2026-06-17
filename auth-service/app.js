import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import authRoutes from './routes/auth.routes.js';


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);


// console.log("PORT =", process.env.PORT);
// console.log("PRIVATE_KEY =", process.env.PRIVATE_KEY);
// console.log("PUBLIC_KEY =", process.env.PUBLIC_KEY);

app.listen(process.env.PORT, () => {
  console.log(`Service Auth is running on port ${process.env.PORT}`);
});