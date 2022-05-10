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
    {
      method: 'GET',
      path: '/',
      handler: async (request, h) => 'Welcome to Obatin API!', // response ketika user masuk ke /
    },
  ]);

  // Server dimulai
  await server.start();
})();
