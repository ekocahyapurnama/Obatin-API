const swaggerOption = {
  info: {
    title: 'Obatin API Documentation',
    version: '1.0',
    description: 'Obatin REST API documentation. This documentation based on OpenAPI specification with Swagger as user interface.',
    contact: {
      name: 'Me',
      email: 'rustwell77@gmail.com',
    },
  },
  grouping: 'tags',
  basePath: '/',
  tags: [
    {
      name: 'talk',
      description: 'This talk tag',
    },
  ],
  payloadType: 'json',
  documentationPath: '/doc',
  schemes: ['http'],
  cors: true,
};

module.exports = swaggerOption;
