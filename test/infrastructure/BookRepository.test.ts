import mongoose from 'mongoose';
import { BookModel } from '../../src/infrastructure/models/BookModel';
import { findAll, insert, deleteBook, update } from '../../src/infrastructure/repositories/BookRepository';

jest.mock('../../src/infrastructure/models/BookModel');

describe('BookRepository', () => {
  
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('findAll', () => {
    it('should return all books', async () => {
      const mockBooks = [
        { _id: new mongoose.Types.ObjectId(), title: 'Test Book 1', author: 'Author 1', price: 10, isbn: '123', language: 'EN', numberOfPages: 100, publisher: 'Pub 1' },
        { _id: new mongoose.Types.ObjectId(), title: 'Test Book 2', author: 'Author 2', price: 15, isbn: '456', language: 'EN', numberOfPages: 150, publisher: 'Pub 2' }
      ];
      (BookModel.find as jest.Mock).mockResolvedValue(mockBooks);

      const result = await findAll();

      expect(BookModel.find).toHaveBeenCalledTimes(1);
      expect(result).toEqual(mockBooks);
    });

    it('should throw an error if something goes wrong', async () => {
      const error = new Error('Error fetching books');
      (BookModel.find as jest.Mock).mockRejectedValue(error);

      await expect(findAll()).rejects.toThrow(error);
    });
  });

  describe('insert', () => {
    it('should insert a book and return it', async () => {
      const mockBook = {
        title: 'Test Book',
        author: 'Author 1',
        price: 20,
        isbn: '789',
        language: 'EN',
        numberOfPages: 200,
        publisher: 'Pub 3'
      };
      
      const insertedBook = {
        _id: new mongoose.Types.ObjectId(), // Mongoose ObjectId mock olarak eklenir
        ...mockBook
      };
  
      (BookModel.create as jest.Mock).mockResolvedValue(insertedBook);
  
      const result = await insert(mockBook);
  
      expect(BookModel.create).toHaveBeenCalledWith(mockBook);
      expect(result).toEqual(insertedBook);
    });
  
    it('should throw an error if something goes wrong during insertion', async () => {
      const error = new Error('Error inserting book');
      const mockBook = {
        title: 'Test Book',
        author: 'Author 1',
        price: 20,
        isbn: '789',
        language: 'EN',
        numberOfPages: 200,
        publisher: 'Pub 3'
      };
      (BookModel.create as jest.Mock).mockRejectedValue(error);
  
      await expect(insert(mockBook)).rejects.toThrow(error);
    });
  });
  
  describe('deleteBook', () => {
    it('should delete a book by id and return true', async () => {
      const mockBookId = '60d21b4667d0d8992e610c85';

      (BookModel.findOneAndDelete as jest.Mock).mockResolvedValue(true);

      const result = await deleteBook(mockBookId);

      expect(BookModel.findOneAndDelete).toHaveBeenCalledWith({ _id: mockBookId });
      expect(result).toBe(true);
    });

    it('should throw an error if something goes wrong during deletion', async () => {
      const error = new Error('Error deleting book');
      (BookModel.findOneAndDelete as jest.Mock).mockRejectedValue(error);

      await expect(deleteBook(new mongoose.Types.ObjectId().toString())).rejects.toThrow(error);
    });
  });

  describe('updateBook', () => {
    it('should update a book and return the updated book', async () => {
      const mockBook: any = {  // _id'yi any olarak tanımlıyoruz
        _id: new mongoose.Types.ObjectId(), // Mongoose ObjectId mock olarak eklenir
        title: 'Updated Book',
        author: 'Author 1',
        price: 25,
        isbn: '999',
        language: 'EN',
        numberOfPages: 300,
        publisher: 'Pub 4'
      };
  
      (BookModel.findOneAndUpdate as jest.Mock).mockResolvedValue(mockBook);
  
      const result = await update(mockBook);
  
      expect(BookModel.findOneAndUpdate).toHaveBeenCalledWith(
        { _id: mockBook._id },
        { $set: mockBook }
      );
      expect(result).toEqual(mockBook);
    });
  
    it('should throw an error if something goes wrong during update', async () => {
      const error = new Error('Error updating book');
      const mockBook: any = {
        _id: new mongoose.Types.ObjectId(),
        title: 'Updated Book',
        author: 'Author 1',
        price: 25,
        isbn: '999',
        language: 'EN',
        numberOfPages: 300,
        publisher: 'Pub 4'
      };
      (BookModel.findOneAndUpdate as jest.Mock).mockRejectedValue(error);
  
      await expect(update(mockBook)).rejects.toThrow(error);
    });
  });
});
