import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import authAlpha from './routes/alpha.routes.js';
import * as Sentry from "@sentry/node";
import './instrument.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(authAlpha);
app.use(express.json());

app.use("/v1/service-alpha", authAlpha);

Sentry.setupExpressErrorHandler(app);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: true,
    message: "Fallo operacional interno del servidor.",
    eventId: res.sentry // Sentry inyecta automáticamente el ID del evento aquí
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Service Alpha is running on port ${process.env.PORT}`);
});