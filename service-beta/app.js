import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import authBeta from './routes/beta.routes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(authBeta);
app.use(express.json());


app.listen(process.env.PORT, () => {
  console.log(`Service Beta is running on port ${process.env.PORT}`);
});