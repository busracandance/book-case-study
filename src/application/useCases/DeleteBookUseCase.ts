import { deleteBook } from '../../infrastructure/repositories/BookRepository';

export const execute = async(bookId: string) => {
  try {
    return await deleteBook(bookId);
  } catch (error) {
    console.error(error, "An error occured while delete book data.");
  }
}

