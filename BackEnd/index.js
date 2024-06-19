const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
//dotenv.config();

const app = express();
const port = process.env.PORT || '4040';

app.use(cors());

// Importando las rutas de la API
const routes = require('./routes');
app.use('/', routes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('¡El Backend está funcionando!');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});