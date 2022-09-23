const axios = require('axios');
const uuid = require('uuid');
const { Binary } = require('mongodb');

module.exports = {
  schema: {
    params: {
      orderId: { type: 'string', format: 'uuid' },
    },
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
      404: {
        type: 'null',
      },
    },
  },

  handler: async function (request, reply) {
    const response =
      await axios.get(process.env.APP_EXAMPLE_ORDERS_URL + '/v1/orders/' + request.params.orderId);

    const order = response.data;

    const _id = uuid.v4();

    await this.mongo.db.collection('items')
      .insertOne({
        _id: new Binary(uuid.parse(_id), Binary.SUBTYPE_UUID),
        order: {
          _id: new Binary(uuid.parse(order._id), Binary.SUBTYPE_UUID),
        },
      });

    reply.status(201)
      .send({ _id });
  },
};
