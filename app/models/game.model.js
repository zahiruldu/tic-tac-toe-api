/**
 * This schema for same user
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  sessionId: {
    type: String,
    unique:true,
    index: true
  },
  board: [{type: String}],
  status: {type: String, default: 'playing'},
  createdDate: {
    type: Date,
    default: Date.now
  },
  updatedDate: {
    type: Date,
    default: Date.now
  }
});

const Model = mongoose.model('Game', GameSchema);
module.exports = Model;