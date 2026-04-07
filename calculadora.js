// calculadora.js
function calcularPromedio(n1, n2, n3, n4) {
    // Validar que no falten notas
    if (n1 === undefined || n2 === undefined || n3 === undefined || n4 === undefined) {
        throw new Error("Todas las notas son requeridas");
    }

    // Convertir a números por si llegan como texto desde el formulario web
    const notas = [Number(n1), Number(n2), Number(n3), Number(n4)];

    // Validar que realmente sean números
    if (notas.some(isNaN)) {
        throw new Error("Las notas deben ser valores numéricos");
    }

    // Calcular según las ponderaciones solicitadas
    const promedio = (notas[0] * 0.10) + (notas[1] * 0.20) + (notas[2] * 0.30) + (notas[3] * 0.40);
    
    // Devolver el resultado redondeado a un decimal
    return Number(promedio.toFixed(1));
}

module.exports = calcularPromedio;