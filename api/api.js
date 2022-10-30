//instancia principal de express
import express from 'express';
import ItemRoutes from './router/ItemRouter.js'

const api = express();

api.use(express.json()); //express acepta body en formato json
api.get('/status', (_,res) => {
    res.json({
        msg: 'api en linea'
    })
})
//registrar nuestras rutas
api.use(ItemRoutes);

export default api;