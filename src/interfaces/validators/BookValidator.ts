import { body } from 'express-validator';

// Validation for insert requests
export const validateInsertBook = [
  body('title').notEmpty().withMessage('Title is required'),
  body('author').notEmpty().withMessage('Author name is required'),
  body('price').isNumeric().withMessage('Price must be a number'),
  body('isbn').notEmpty().withMessage('ISBN is required'),
  body('language').notEmpty().withMessage('Language is required'),
  body('numberOfPages').isNumeric().withMessage('NumberOfPages is required'),
  body('publisher').notEmpty().withMessage('Publisher is required'),
];

// Validation for update requests
export const validateUpdateBook = [
  body('_id').notEmpty().withMessage('Id is required'),
  body('title').notEmpty().withMessage('Title is required'),
  body('author').notEmpty().withMessage('Author name is required'),
  body('price').isNumeric().withMessage('Price must be a number'),
  body('isbn').notEmpty().withMessage('ISBN is required'),
  body('language').notEmpty().withMessage('Language is required'),
  body('numberOfPages').isNumeric().withMessage('NumberOfPages is required'),
  body('publisher').notEmpty().withMessage('Publisher is required'),
];
