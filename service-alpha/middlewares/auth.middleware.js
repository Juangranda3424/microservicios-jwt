import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        // Error Lógico: El cliente no mandó cabecera. Retorno limpio.
        return res.status(401).json({
            message: "Token no proporcionado"
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        // Si la ruta del .env está mal o no existe el archivo, fs lanzará un error operativo
        const publicKey = fs.readFileSync(
            path.resolve(process.env.PUBLIC_KEY),
            'utf8'
        );

        const decoded = jwt.verify(
            token,
            publicKey,
            { algorithms: ['RS256'] }
        );

        req.user = decoded;
        return next();

    } catch (error) {
        // --- DIFERENCIACIÓN: ERRORES LÓGICOS (No van a Sentry) ---
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                message: "Token expirado"
            });
        }

        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({
                message: "Token inválido"
            });
        }

        // --- DIFERENCIACIÓN: ERROR OPERACIONAL (Va directo a Sentry) ---
        // Si llegó aquí (ej. la llave pública no se leyó bien), es un fallo del sistema.
        // Usamos next(error) para que Sentry capture el crash en su dashboard
        return next(error);
    }
};