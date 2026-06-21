// OBLIGATORIO: instrument.js debe ser la PRIMERÍSIMA línea
import './instrument.js'; 

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authAlpha from './routes/alpha.routes.js';
import * as Sentry from "@sentry/node";

dotenv.config();
const app = express();

// Middlewares base
app.use(cors());
app.use(express.json()); // Movido arriba antes de las rutas para capturar los bodies de las peticiones

// Rutas del Microservicio
app.use("/v1/service-alpha", authAlpha);

// Manejador de errores de Sentry (justo después de las rutas)
Sentry.setupExpressErrorHandler(app);

// Tu middleware de manejo de errores personalizado final
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: true,
    message: err.message || "Fallo operacional interno del servidor.",
    eventId: res.sentry // ID único del evento generado por Sentry para el tracking del alumno/usuario
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Service Alpha is running on port ${process.env.PORT}`);
});