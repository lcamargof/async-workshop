/**
 * INTRODUCCION A PROMISES
 * Metodo basico para la programación asincrona
 * Introducido en ES6 oficialmente a javascript
 * Muy utilizado en el día a día
 */

// PROMESA (hagan como si fuera un call a algun API)
const upperAsync = (str) => {
  // Retorno una nueva promesa
  return new Promise((resolve, reject) => {
    if (str) {
      // resuelvo la promesa satisfactoriamente
      resolve(str.toUpperCase());
    } else {
      // rechazo la promesa
      reject('Invalid string');
    }
  });
};

console.log('SIMPLE EXAMPLE');
// Utilizar then para continuar con el codigo y recibir el resultado
upperAsync('hola!').then(result => console.log(result)); // HOLA!

console.log('------------------');

// CATCH
console.log('EJEMPLOS DE CATCH DE ERRORES');
// Utilizar catch para atrapar los errores que ocurran en el transcurso de la promesa
upperAsync()
  .then(() => null) // No va a entrar
  .catch(err => console.log(err));

// Podemos tener distintos catchs en distintas partes del codigo
// Que entre a un catch no significa que la promesa no siga ejecutandose
upperAsync('hola')
  .then(result => {
    upperAsync(null)
      .catch(err => console.log('INNER', err));
  })
  .catch(err => console.log('OUTER', err));

// Try catch funcionara con promises?
try {
  upperAsync('hola!')
    .then(result => {
      upperAsync(null)
    });
} catch(err) {
  console.log('trycatch', err);
}

console.log('------------------');

console.log('CHAINING');
// CHAINING
// Podemos encadenar las promeses, es decir, dentro de una promesa devolver otra
// Esta es la manera más elegante de seguir con el flujo
// La indentación y complejidad no cambia a diferencia del callback hell
upperAsync('hola')
  .then(upperAsync)
  .then(result => {
    return upperAsync(result);
  })
  .then(() => upperAsync(null))
  .catch(() => {
    throw new Error('From upper catch');
  })
  .catch(err => {
    console.log(err);
  })
  .then(() => console.log('NADA ME DETIENE!!!'));

console.log('------------------');

console.log('MULTIPLE PROMISES');
// MULTIPLE
// Que hacemos cuando tenemos que manejar multiples promesas?
const strings = ['a', 'b', 'c'];

const promises = strings.map(s => upperAsync(s));

// Promise.all es la solución recibe un array de promises
Promise.all(promises)
  .then(values => {
    console.log(values);
  });

strings.push(null);

const failPromise = strings.map(s => upperAsync(s));

// El unico problema es que si alguna de estas promesas falla
// Entonces va directo al catch a pesar de que las demás sean satisfactorias
// Como podriamos solucionar esto?
Promise.all(failPromise)
  .then(result => console.log('MULTIPLE RESULT', result))
  .catch(err => console.log('MULTIPLE ERROR', err));

// Cacheo de errores de NODE
// Y no, try catch no funciona con promises
process.on('unhandledRejection', (err) => {
  console.log('ERROR!!!!', err);
});

/**
 * Debido a los problemas con los callbacks Promises fueron una solución muy atractica
 * Incluso antes de ser soportadas oficialmente por el lenguaje
 * Ya habian diversas librerias que te ayudaban a convertir callbacks a promises (como Bluebird)
 * Pero en ES6 esta y muchas otras cosas entraron en escena.
 */