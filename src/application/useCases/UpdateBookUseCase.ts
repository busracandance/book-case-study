import { BookSchema } from '../../infrastructure/models/BookModel';
import { update } from '../../infrastructure/repositories/BookRepository';

export const execute = async(book: BookSchema) => {
  try {
    return await update(book);
  } catch (error) {
    console.error(error, "An error occured while update book data.");
  }
}

