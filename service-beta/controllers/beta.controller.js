import { BetaService } from "../services/jwt.service.js";

const betaGetData = (req, res) => {

    try {
        const data = BetaService.getData();
        return res.json({
            message: "Data obtenida exitosamente",
            data: data
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al obtener los datos",
            error: error.message
        });
    };

}

export {
    alphaGetData
};