/**
 * INTRODUCCION A GENERATORS
 * Devuelven un iterable
 * No son muy comunes
 */

function* idMaker() {
  yield 0;
  yield 1;
  return 2;
}

const gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined

// ASYNC

function testAsync() {
  return new Promise(resolve => resolve('resolve'));
}

function* testGenerator() {
  const result = yield testAsync();
  return `Result of the async call ${result}`;
}

const iterator = testGenerator();
const iteration = iterator.next();

iteration.value.then(result => {
  console.log(iterator.next(result));
});