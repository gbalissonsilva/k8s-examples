const fastify = require('.');

fastify.listen({ host: '0.0.0.0', port: process.env.PORT })
  .catch((error) => {
    fastify.log.error(error);
    process.exit(1);
  });
