const users = [
  {
    id: 1,
    name: 'hola',
  }
];

const roles = [
  {
    userId: 1,
    role: 'admin',
  }
];

const userPosts = [
  {
    userId: 1,
    postId: 1
  },
  {
    userId: 1,
    postId: 2,
  },
  {
    userId: 1,
    postId: 3,
  }
];

const posts = [
  {
    id: 1,
    content: 'First post'
  },
  {
    id: 2,
    content: 'Last post',
  },
  {
    id: 3,
    content: 'Another post',
  },
];

/**
 * Considerando el siguiente flujo:
 * 1. Utilizar la función getPosts enviandole un userId (en este caso 1)
 * 2. Revisar el array de roles para verificar que el user es administrador
 * 3. Buscar los posts del usuario en el array userPosts
 * 4. Mapear el ID de los posts con el contenido en el array de posts
 * 5. Regresar un array con el contenido de los posts del usuario
 * Ejemplo: Result: [First post, Last post, Another post]
 * Solo utilizar callbacks para obtener los resultados de la busqueda en cada array (a pesar de no ser un codigo asincrono)
 * Agregar un fake timeout para simular que la respuesta se tardo 1 segundo.
 */

function getUserPosts(userId) {
  // Do your code here
}