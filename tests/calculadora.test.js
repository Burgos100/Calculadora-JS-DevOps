// tests/calculadora.test.js
const calcularPromedio = require('../calculadora');

test('Calcula correctamente el promedio ponderado con notas perfectas', () => {
    // Si un alumno tiene 7.0 en todo, su promedio debe ser 7.0
    expect(calcularPromedio(7.0, 7.0, 7.0, 7.0)).toBe(7.0)
});

test('Calcula correctamente un escenario con notas variadas', () => {
    // Cálculo: (4*0.1) + (5*0.2) + (6*0.3) + (7*0.4) = 0.4 + 1.0 + 1.8 + 2.8 = 6.0
    expect(calcularPromedio(4.0, 5.0, 6.0, 7.0)).toBe(6.0);
});

test('Lanza un error si faltan ingresar notas', () => {
    // Solo enviamos 3 notas en lugar de 4
    expect(() => calcularPromedio(5.0, 6.0, 7.0)).toThrow("Todas las notas son requeridas");
});

test('Lanza un error si se ingresan letras en lugar de números', () => {
    expect(() => calcularPromedio(5.0, "seis", 7.0, 4.0)).toThrow("Las notas deben ser valores numéricos");
});