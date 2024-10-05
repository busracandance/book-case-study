import { BookModel, BookSchema } from '../models/BookModel';

  // Gets all books
  export const findAll = async () => {
    try {
      return await BookModel.find();
    } catch(error) {
      console.error(error, "findAll(): An error occured while get book data.");
    }
  }

  // Create a book
  export const insert = async(book: BookSchema) : Promise<BookSchema> => {
    try {
      const insertedBook = await BookModel.create(book);

      return insertedBook;
    } catch (error) {
      console.error(error, "insert(): An error occured while insert book data.");
      throw error;
    }
  }

  // Delete a book
  export const deleteBook = async(bookId: string) : Promise<boolean> => {
    try {
      await BookModel.findOneAndDelete({_id: bookId});
      return true;
    } catch (error) {
      console.error(error, "delete(): An error occured while delete book data.");
      throw error;
    }
  }

  // Update a book
  export const update = async(book: BookSchema) : Promise<BookSchema> => {
    try {
      await BookModel.findOneAndUpdate({ _id: book._id }, { $set: book });
      return book;
    } catch (error) {
      console.error(error, "update(): An error occured while update book data.");
      throw error;
    }
  }