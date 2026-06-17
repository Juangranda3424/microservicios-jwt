import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());


app.listen(process.env.PORT, () => {
  console.log(`Service Alpha is running on port ${process.env.PORT}`);
});