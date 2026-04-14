const calcularPromedio = require('../calculadora');

test('Calcula correctamente el promedio ponderado con notas perfectas', () => {
    expect(calcularPromedio(7.0, 7.0, 7.0, 7.0)).toBe(7.0)
});

test('Calcula correctamente un escenario con notas variadas', () => {
    expect(calcularPromedio(4.0, 5.0, 6.0, 7.0)).toBe(6.0);
});

test('Lanza un error si faltan ingresar notas', () => {
    expect(() => calcularPromedio(5.0, 6.0, 7.0)).toThrow("Todas las notas son requeridas");
});

test('Lanza un error si se ingresan letras en lugar de números', () => {
    expect(() => calcularPromedio(5.0, "seis", 7.0, 4.0)).toThrow("Las notas deben ser valores numéricos");
});