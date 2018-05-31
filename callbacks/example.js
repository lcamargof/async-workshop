/**
 * INTRODUCCION A CALLBACKS
 * Metodo basico para la programación asincrona
 * Se utiliza día a día aunque no lo sepamos (hasta ahora)
 */

console.log('Callbacks - INTRO');
console.log('------------------');

// Ejemplo Timeout

// Función anonima que sera ejecutada como "callback"
const callback = () => console.log('Callback!');

// Primera llamada al stack
console.log('Hola!');
// Segunda llamada al stack (se crea un timer)
setTimeout(callback, 0);
// Tercera llamada al stack
console.log('Hasta luego');
// El Timer termina, `callback` es añadido al stack y se ejecuta

/**
 * Gracias a la particularidad de Javascript, las funciones son ciudadanos de primera clase
 * Estas se pueden enviar como parametros de una función para ser ejecutada por esta misma "al momento deseado"
 * En este pequeño ejemplo enviamos la función "callback" para que esta sea añadida al stack al momento en que termine el timer
 * A pesar de que el timer este en 0, y creamos que por esto la función se deberia ejecutar de una vez gracias a la
 * particularidad del event loop, hacer un setTimeout en 0 crea una función "diferida" que sera ejecutada al final
 * Esto es debido a que los callbacks son añadidos cuando se vacia el stack, es decir, cuando se finalice la ejecución
 */