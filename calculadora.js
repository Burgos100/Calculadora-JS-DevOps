function calcularPromedio(n1, n2, n3, n4) {
    if (n1 === undefined || n2 === undefined || n3 === undefined || n4 === undefined) {
        throw new Error("Todas las notas son requeridas");
    }

    const notas = [Number(n1), Number(n2), Number(n3), Number(n4)];

    if (notas.some(isNaN)) {
        throw new Error("Las notas deben ser valores numéricos");
    }

    const promedio = (notas[0] * 0.10) + (notas[1] * 0.20) + (notas[2] * 0.30) + (notas[3] * 0.40);
    
    return Number(promedio.toFixed(1));
}

module.exports = calcularPromedio;