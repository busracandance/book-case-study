import { Request, Response } from 'express';
import { execute as executeGetAllBooks } from '../../application/useCases/GetBooksUseCase';
import { execute as executeCreateBook } from '../../application/useCases/CreateBookUseCase';
import { execute as executeDeleteBook } from '../../application/useCases/DeleteBookUseCase';
import { execute as executeUpdateBook } from '../../application/useCases/UpdateBookUseCase';
import { BookSchema } from '../../infrastructure/models/BookModel';
import { validationResult } from 'express-validator';

export const getAllBooks = async (_req: Request, res: Response) => {
  try {
    const response = await executeGetAllBooks();

    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
};

export const insertBook = async (req: Request, res: Response) => {
  try {
    const validationError = validationResult(req);
    if (!validationError.isEmpty()) res.status(400).json({ error: validationError });
    
    const book = req.body as BookSchema;
    const response = await executeCreateBook(book);

    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Failed to insert book' });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const response = await executeDeleteBook(req.params.id);
    res.status(200).json("Successfull!");
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete book' });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const validationError = validationResult(req);
    if (!validationError.isEmpty()) res.status(400).json({ error: validationError });

    const book = req.body as BookSchema;
    const response = await executeUpdateBook(book);

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update book' });
  }
};