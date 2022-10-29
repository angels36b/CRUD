import mongoose from "mongoose";
import config from './index.js';

const db = mongoose.connection;

db.on('connecting', () => {
    console.log('Conectando a la base de datos 🎓')
});

db.on ('error', () => {
    console.log('Error al conectarse a la base de datos')
})

export default () => {
    mongoose.connect(config.database.uri);
};