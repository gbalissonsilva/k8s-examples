const opentelemetry = require('@opentelemetry/sdk-node');

const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');

const { HttpInstrumentation } = require('@opentelemetry/instrumentation-http');
const { MongoDBInstrumentation } = require('@opentelemetry/instrumentation-mongodb');

const sdk = new opentelemetry.NodeSDK({
  traceExporter: new OTLPTraceExporter(),
  instrumentations: [
    new HttpInstrumentation(),
    new MongoDBInstrumentation(),
  ],
});

sdk.start();

// -------------------------------------------------------------------------------------------------

const fastify = require('.');

fastify.listen({ host: '0.0.0.0', port: process.env.PORT })
  .catch((error) => {
    fastify.log.error(error);
    process.exit(1);
  });

// -------------------------------------------------------------------------------------------------

process.on('SIGINT', handleSignal);
process.on('SIGTERM', handleSignal);

function handleSignal(signal) {
  fastify.close();
  process.exit(0);
}
