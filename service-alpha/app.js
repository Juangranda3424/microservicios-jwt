import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import authAlpha from './routes/alpha.routes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(authAlpha);
app.use(express.json());

app.use("/v1/service-alpha", authAlpha);


app.listen(process.env.PORT, () => {
  console.log(`Service Alpha is running on port ${process.env.PORT}`);
});