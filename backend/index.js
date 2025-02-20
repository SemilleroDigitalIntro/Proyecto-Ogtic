const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


// Configuración de la conexión a SQL Server
const config = {
    user: 'sa',
    password: 'nashla21273010',
    server: 'NASHLASENA27112',
    database: 'Registro',
    options: {
        encrypt: true, // Si usas Azure SQL
    },
};


// Ruta para obtener datos de la tabla
app.get('/api/datos', async (req, res) => {
    try {
        await sql.connect(config);
        const result = await sql.query('SELECT * FROM Table_registro');
        res.json(result.recordset);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los datos');
    }
});


// Iniciar el servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
