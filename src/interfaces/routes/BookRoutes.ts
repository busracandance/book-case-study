import { Router } from 'express';
import { getAllBooks, insertBook, deleteBook, updateBook } from '../controllers/BookController';
import { validateUpdateBook, validateInsertBook } from '../validators/BookValidator';

// Define router
const router = Router();

router.get('/', getAllBooks);
router.put('/', validateUpdateBook, updateBook);
router.post('/', validateInsertBook, insertBook);
router.delete('/:id', deleteBook);

export { router as BookRoutes };
