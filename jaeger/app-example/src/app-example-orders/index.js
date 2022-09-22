const fastify = require('fastify')({
  logger: true,
});

fastify.get('/', function (request, reply) {
  reply.send({ app: 'app-example-orders' });
});

module.exports = fastify;
