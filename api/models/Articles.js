/**
 * Articles.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const { datastores } = require("../../config/datastores");

module.exports = {

  attributes: {

    title: {
      type: 'string'
    },
    body: {
      type: 'string'
    }


  },
  // datastore: 'mongodb'

};
