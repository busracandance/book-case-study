import dotenv from 'dotenv';

dotenv.config();

// Variables
const NODE_ENV = process.env.NODE_ENV || '';
const MONGO_DB_USER = process.env.DB_USER || '';
const MONGO_DB_PASSWORD = process.env.DB_PASSWORD || '';
const MONGO_DB_NAME = process.env.DB_NAME || '';
const MONGO_URL = `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@dev-cluster.5pyfb.mongodb.net/?retryWrites=true&w=majority&appName=dev-cluster`;
const SERVER_PORT = process.env.PORT ? Number(process.env.PORT) : 4000;
const MONGO_URL_LOCAL = process.env.MONGO_URL || '';

//Create config object
const config = {
    mongo: {
        url: MONGO_URL_LOCAL,
        dbName: MONGO_DB_NAME
    },
    server: {
        port: SERVER_PORT,
    },
};

//Check for environment
if (NODE_ENV === 'production') {
    config.mongo.url = MONGO_URL;
    config.server.port = SERVER_PORT;
} else if (NODE_ENV === 'development') {
    config.mongo.url = MONGO_URL_LOCAL;
    config.server.port = SERVER_PORT;
}

export default config;