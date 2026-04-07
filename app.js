// app.js
const express = require('express');
const calcularPromedio = require('./calculadora');

const app = express();
// Permite leer los datos enviados por el formulario HTML
app.use(express.urlencoded({ extended: true }));

// Mostrar el formulario cuando el usuario entra a la web
app.get('/', (req, res) => {
    res.send(`
        <h2>Calculadora de Promedios Universitarios</h2>
        <form action="/calcular" method="POST">
            <label>Nota 1 (10%):</label> <input type="text" name="n1" required><br><br>
            <label>Nota 2 (20%):</label> <input type="text" name="n2" required><br><br>
            <label>Nota 3 (30%):</label> <input type="text" name="n3" required><br><br>
            <label>Nota 4 (40%):</label> <input type="text" name="n4" required><br><br>
            <button type="submit">Calcular Promedio Final</button>
        </form>
    `);
});

// Procesar las notas cuando se envía el formulario
app.post('/calcular', (req, res) => {
    try {
        const { n1, n2, n3, n4 } = req.body;
        const promedioFinal = calcularPromedio(n1, n2, n3, n4);
        res.send(`<h3>El promedio final del estudiante es: ${promedioFinal}</h3><a href="/">Volver</a>`);
    } catch (error) {
        res.send(`<h3>Error: ${error.message}</h3><a href="/">Volver</a>`);
    }
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});