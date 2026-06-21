import { AlphaService } from "../services/jwt.service.js";

// Agregamos 'next' como tercer parámetro para poder pasar el error operacional al manejador de Sentry
const alphaGetData = (req, res, next) => {

    try {
        // --- SIMULACIÓN DE FALLO OPERACIONAL CRÍTICO ---
        // Descomenta esta línea para forzar el error 500 que capturará Sentry:
        throw new Error("Conexión perdida con la BDD");

        // Este código no se ejecutará mientras el throw de arriba esté activo
        const data = AlphaService.getData();
        return res.json({
            message: "Data obtenida exitosamente",
            data: data
        });

    } catch (error) {
        // En lugar de responder un json genérico inmediatamente aquí, 
        // pasamos el error a next(error) para que Sentry.setupExpressErrorHandler(app) lo capture en la nube.
        return next(error);
    }
}

export {
    alphaGetData
};