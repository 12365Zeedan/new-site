import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    title: {
      en: { type: String, required: true },
      ar: { type: String, required: true }
    },
    excerpt: {
      en: { type: String, default: '' },
      ar: { type: String, default: '' }
    },
    body: {
      en: { type: String, default: '' },
      ar: { type: String, default: '' }
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    published: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const Post = mongoose.model('Post', postSchema);
