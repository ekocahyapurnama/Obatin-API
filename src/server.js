const Hapi = require('@hapi/hapi');

// plugin untuk memuat swagger, Inert dan vision digunakan untuk memuat ui
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');

// memuat custom exceptions
const NotFoundError = require('./exceptions/NotFoundError');
const ClientError = require('./exceptions/ClientError');

// Deskripsi swagger
const swaggerOption = require('./swaggerOption');

// memuat plugin talk, memanggil class service NlpService, dan validator
const talk = require('./api/talk');
const NlpService = require('./services/nlp/NlpService');
const TalkValidator = require('./validator/talk');

// Direktori model
const botDir = `${__dirname}/bot`;

(async () => {
  // membuat instance dari Class NlpService dengan parameter direktori model (botDir)
  const nlpService = new NlpService(botDir);

  // Konfigurasi server
  const server = Hapi.server({
    host: process.env.HOST || 'localhost', // host, prod 0.0.0.0 set ke env
    port: process.env.PORT || 5000, // port
    routes: {
      cors: {
        origin: ['*'], // menetapkan cors agar tidak terjadi error di front-end
      },
    },
  });

  // menambahkan extension sebelum server meresponse
  server.ext('onPreResponse', (request, h) => {
    const { response } = request;

    // jika response menidikasikan ClientError
    if (response instanceof ClientError) {
      // jika response adalah NotFoundError
      if (response instanceof NotFoundError) {
        return h.response({
          status: 'Not Found',
          message: response.message,
        }).code(response.statusCode); // 404
      }

      // response dengan statusCode 400
      return h.response({
        status: 'Bad Request',
        message: response.message,
        data: {},
      }).code(response.statusCode); // 400
    }

    // meneruskan response
    return response.continue || response;
  });

  // Mendaftarkan plugin Inert, Vision, dan hapi-swagger
  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOption,
    },
  ]);

  // Mendaftarkan custom plugin, yaitu talk dengan option service, dan validator
  await server.register([
    {
      plugin: talk,
      options: {
        service: nlpService,
        validator: TalkValidator,
      },
    },
  ]);

  // Server dimulai
  console.log(`server running on ${server.info.uri}`);
  await server.start();
})();
