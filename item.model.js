// models/Item.js
import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, default: 0 },
  description: { type: String, default: '' },
});

export const Item = mongoose.model('Item', itemSchema);

