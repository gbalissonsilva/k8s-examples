const uuid = require('uuid');
const { Binary } = require('mongodb');

module.exports = {
  schema: {
    body: {
      type: 'object',
      required: [],
      additionalProperties: false,
      properties: {},
    },
    response: {
      201: {
        type: 'object',
        required: ['_id'],
        additionalProperties: false,
        properties: {
          _id: { type: 'string', format: 'uuid' },
        },
      },
    },
  },

  handler: async function (request, reply) {
    const _id = uuid.v4();

    await this.mongo.db.collection('orders')
      .insertOne({
        _id: new Binary(uuid.parse(_id), Binary.SUBTYPE_UUID),
      });

    reply.status(201)
      .send({ _id });
  },
};
