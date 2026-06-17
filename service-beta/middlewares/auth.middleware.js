import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

export const authMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Token no proporcionado"
        });
    }

    const token = authHeader.split(" ")[1];

    try {

        const publicKey = fs.readFileSync(
            path.resolve(process.env.PUBLIC_KEY),
            'utf8'
        );

        const decoded = jwt.verify(
            token,
            publicKey,
            {
                algorithms: ['RS256']
            }
        );

        req.user = decoded;

        next();

    } catch (error) {

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

        return res.status(500).json({
            message: "Error interno con el token de autenticación"
        });
    }
};