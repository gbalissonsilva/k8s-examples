const fastify = require('fastify')({
  logger: true,
});

fastify.register(require('@fastify/mongodb'), {
  forceClose: true,
  url: process.env.MONGODB_URL,
  database: process.env.MONGODB_DATABASE,
});

fastify.get('/', function (request, reply) {
  reply.send({ app: 'app-example-items' });
});

fastify.post('/v1/orders/:orderId/items', require('./routes/create.js'));

module.exports = fastify;
