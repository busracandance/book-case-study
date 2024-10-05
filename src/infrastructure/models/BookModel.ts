import mongoose, { Schema, SchemaType, model } from 'mongoose';

export interface BookSchema {
  _id?: mongoose.Schema.Types.ObjectId,
  title: string,
  author: string,
  price: number,
  isbn: string,
  language: string,
  numberOfPages: number,
  publisher: string
}

const bookSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true, auto: true },
  title: { type: String, required: true },
  author:  { type: String, required: true },
  price: { type: Number, required: true },
  isbn: { type: String, required: true },
  language: { type: String, required: true },
  numberOfPages: { type: Number, required: true },
  publisher: { type: String, required: true },
},
{
  versionKey: false
});

export const BookModel = model<BookSchema>('books', bookSchema);
