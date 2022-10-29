import http from 'http';
import api from './api/api.js'
import config from './api/config/index.js';
import database from './api/config/database.js';

const server = http.createServer(api);

server.on('error',(error)=>{

    if(error.code === 'E'){
        console.log(`Puerto ${config.server.port} ocupado por otra app`)
    }else{console.error(`Error al iniciar🤕 en el puerto ${config.server.port}`)}
    

});

server.on('listening', ()=>{
    console.log('Servidor escuchando 🔊')
})

server.listen(config.server.port);
database();