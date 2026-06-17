import { JwtService } from "../services/jwt.service.js";
import { UserDTO } from "../model/userDTO.js";

const login = (req, res) => {

    const user = new UserDTO(req.body);

    const token = JwtService.signToken(user);

    return res.json({
        message: "Login exitoso",
        token: token
    });


};

const refresh = (req, res) => {

    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Token no proporcionado" });
    }

    try {
        const newToken = JwtService.refreshToken(token);
        return res.json({
            message: "Token refrescado exitosamente",
            token: newToken
        });
    } catch (error) {
        return res.status(401).json({ message: "Token inválido" });
    }
};


export {
    login,
    refresh
};
