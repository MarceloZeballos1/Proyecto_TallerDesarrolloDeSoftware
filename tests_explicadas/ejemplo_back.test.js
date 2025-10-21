// Prueba de ejemplo muy simple con explicaciones en español sencillo.
// Objetivo: comprobar que una función devuelve el doble de un número.

// Esta es la "función bajo prueba". En la vida real vendría de otro archivo.
function doble(x) {
  return x * 2;
}

// A continuación definimos la prueba usando Jest.
// Comentarios en lenguaje no técnico explican cada parte.
describe('Prueba sencilla: función doble', () => {
  test('Si le doy 2, debe devolver 4', () => {
    // Ejecutamos la función con el valor 2
    const resultado = doble(2);

    // Comprobamos que el resultado sea exactamente 4
    expect(resultado).toBe(4);
  });
});
