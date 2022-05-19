const routes = (handler, doc) => [
  {
    method: 'POST',
    path: '/users',
    handler: handler.postUserHandler,
    options: doc.postUsersDoc,
  },
];

module.exports = routes;
