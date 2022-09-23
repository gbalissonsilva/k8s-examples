const fastify = require('fastify')({
  logger: true,
});

fastify.register(require('@fastify/mongodb'), {
  forceClose: true,
  url: process.env.MONGODB_URL,
});

fastify.get('/', function (request, reply) {
  reply.send({ app: 'app-example-orders' });
});

fastify.post('/v1/orders', require('./routes/create.js'));

module.exports = fastify;
