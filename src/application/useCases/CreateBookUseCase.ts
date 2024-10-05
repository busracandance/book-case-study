import { BookSchema } from '../../infrastructure/models/BookModel';
import { insert } from '../../infrastructure/repositories/BookRepository';

export const execute = async(book: BookSchema) => {
  try {
    return await insert(book);
  } catch (error) {
    console.error(error, "An error occured while create book data.");
  }
}