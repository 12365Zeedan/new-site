import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    sku: { type: String, required: true, unique: true },
    name: {
      en: { type: String, required: true },
      ar: { type: String, required: true }
    },
    description: {
      en: { type: String, default: '' },
      ar: { type: String, default: '' }
    },
    price: { type: Number, required: true, min: 0 },
    inStock: { type: Boolean, default: true },
    category: { type: String, default: 'general' }
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);
