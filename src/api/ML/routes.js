const routes = (handler) => [
  {
    method: 'POST',
    path: '/bot',
    handler: handler.postPredictHandler,
  },
  {
    method: 'POST',
    path: '/bot/message',
    handler: handler.postGetResponseHandler,
  },
  {
    method: 'POST',
    path: '/bot/message/reply',
    handler: handler.postGetMessageHandler,
  },
];

module.exports = routes;
