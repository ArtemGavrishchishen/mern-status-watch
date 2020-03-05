const { Schema, model } = require('mongoose');

const schema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  gender: { type: String, enum: ['man', 'woman', 'children'], required: true },
  style: { type: String, required: true },
  mechanism: { type: String, required: true },
  color: { type: String, required: true },
  label: { type: String, enum: [null, 'sale', 'hit', 'new'], default: null },
  img: { type: String },
  price: { type: Number, required: true }
});

module.exports = model('Watch', schema);
