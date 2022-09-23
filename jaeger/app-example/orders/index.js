const fastify = require('fastify')({
  logger: true,
});

fastify.register(require('@fastify/mongodb'), {
  forceClose: true,
  url: process.env.MONGODB_URL,
  database: process.env.MONGODB_DATABASE,
});

fastify.get('/', function (request, reply) {
  reply.send({ app: 'app-example-orders' });
});

fastify.post('/v1/orders', require('./routes/create.js'));
fastify.get('/v1/orders/:orderId', require('./routes/find.js'));

module.exports = fastify;
