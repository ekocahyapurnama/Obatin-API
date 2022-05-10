const Hapi = require('@hapi/hapi');

(async () => {
  // KOnfigurasi server
  const server = Hapi.server({
    host: process.env.HOST || 'localhost', // host, prod 0.0.0.0 set ke env
    port: process.env.PORT || 5000, // port
    routes: {
      cors: {
        origin: ['*'], // menetapkan cors agar tidak terjadi error di front-end
      },
    },
  });

  // Menambahkan route / dengan method GET
  await server.route([
    // route root
    {
      method: 'GET',
      path: '/',
      handler: async (request, h) => 'Welcome to Obatin API!', // response ketika user masuk ke /
    },
    // route register
    {
      method: 'POST',
      path: '/users',
      handler: async (request, h) => 'POST /users',
    },
    // route auth
    {
      method: 'POST', // menambahkan token di database
      path: '/auth',
      handler: async (request, h) => 'POST /auth',
    },
    {
      method: 'PUT', // mengedit token yang ada di database
      path: '/auth',
      handler: async (request, h) => 'PUT /auth',
    },
    {
      method: 'DELETE',
      path: '/auth', // mengahpus token yang ada di database
      handler: async (request, h) => 'DELETE /auth',
    },
    // route talk
    {
      method: 'POST',
      path: '/talk', // untuk berinteraksi dengan bot
      handler: async (request, h) => 'POST /talk',
    },
  ]);

  // Server dimulai
  console.log(`server running on ${server.info.uri}`);
  await server.start();
})();
