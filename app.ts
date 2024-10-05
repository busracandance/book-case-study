import express from 'express';
import { BookRoutes } from './src/interfaces/routes/BookRoutes';
import { MongoDBConnection } from './src/infrastructure/database/MongoDBConnection';
import config from './src/utils/databaseConfig';

const app = express();
const PORT = config.server.port || 3000;

app.use(express.json());

app.use('/books', BookRoutes);

const startServer = async () => {
  try {
    app.listen(PORT, async () => {
      console.log(`Server is running on port ${PORT}`);
      try {
        await MongoDBConnection.connectDB();
        console.log('Database connected');
      } catch (err) {
        console.log('Error connecting to database:', err);
      }
    });
  } catch (error) {
    console.error('Unable to start server:', error);
  }
};

startServer();
