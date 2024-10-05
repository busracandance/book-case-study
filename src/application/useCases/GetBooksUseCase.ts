import { findAll } from '../../infrastructure/repositories/BookRepository';

export const execute = async() => {
  try {
    return await findAll();
  } catch (error) {
    console.error(error, "An error occured while get book data.");
  }
}