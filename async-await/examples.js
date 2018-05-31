/**
 * INTRODUCCION A ASYNC AWAIT
 * Metodo basico para la programación asincrona
 * Si quieren manejar el flujo asincrono como si fuera sincrono
 * Esta es tu alternativa ideal
 */

console.log('Async/Await - INTRO');
console.log('------------------');

function request(url) {
  return new Promise((resolve, reject) => {
    if (url) {
      resolve({
        data: '(THIS IS THE REQUEST RESPONSE)'
      });
    } else {
      reject('Invalid URL');
    }
  });
}

// Basic example
// `async` y `await` son la clave aqui
async function test(url) {
  const { data } = await request(url);

  console.log('The flow is normal!!!', data);

  return data;
}

console.log('Que devuelve una función async?', test('yay'));

// Como podemos manejar multiple?

console.log('------------------');
console.log('Async/Await - ERROR CATCHING');

async function letsCatch() {
  try {
    const { data } = await request(null);

    return data;
  } catch(err) {
    console.log('ERROR:', err);
    return err;
  }
}

console.log('CATCH EXAMPLE', letsCatch());

// Que pasaria si no cachamos con un try catch? let's see
test();

// Como lo solucionamos?

process.on('unhandledRejection', (err) => {
  console.log('ERROR!!!!', err);
});

/**
 * Async await to the rescue, en caso de que quieran codigo sincrono
 * Funciona sobre promesas y la funcion que definas con async regresara una promesa
 * Es muy común, especialmente para llamadas de API
 */