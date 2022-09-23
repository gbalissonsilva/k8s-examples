const uuid = require('uuid');
const { Binary } = require('mongodb');

module.exports = {
  schema: {
    params: {
      orderId: { type: 'string', format: 'uuid' },
    },
    response: {
      200: {
        type: 'object',
        required: ['_id'],
        additionalProperties: false,
        properties: {
          _id: { type: 'string', format: 'uuid' },
        },
      },
      404: {
        type: 'null',
      },
    },
  },

  handler: async function (request, reply) {
    const _id = request.params.orderId;

    const result = await this.mongo.db.collection('orders')
      .findOne({
        _id: new Binary(uuid.parse(_id), Binary.SUBTYPE_UUID),
      });

    if (! result) {
      reply.status(404)
        .send();
      return;
    }

    result._id = uuid.stringify(result._id.buffer);

    reply.status(200)
      .send(result);
  },
};
