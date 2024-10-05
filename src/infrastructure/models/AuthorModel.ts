import mongoose, { Schema, model } from 'mongoose';

export interface AuthorSchema {
  _id: mongoose.Schema.Types.ObjectId,
  name: string,
  country: string,
  birthdate: string
}

const authorSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true, auto: true },
  name: { type: String, required: true },
  country: { type: String, required: true },
  birthdate: { type: String, required: true }
},
{
  versionKey: false
});

export const AuthorModel = model<AuthorSchema>('authors', authorSchema);
