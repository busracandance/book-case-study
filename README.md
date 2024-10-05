# book-case-study
# Book Management API

[![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-v16.x-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-v4.x-lightgrey)](https://expressjs.com/)
[![Docker](https://img.shields.io/badge/Docker-19.x-blue)](https://www.docker.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.x-brightgreen)](https://www.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-v5.x-red)](https://mongoosejs.com/)
[![Jest](https://img.shields.io/badge/Jest-27.x-orange)](https://jestjs.io/)

## Overview

This project is a **Book Management API** built with **TypeScript** and **Express**. It leverages **MongoDB** and **Mongoose** for data persistence and is structured following the principles of **clean architecture**. The project also includes **unit tests** written with **Jest**, and supports containerization via **Docker**.

### Features
- RESTful API for managing books
- CRUD operations:
  - **GET** all books
  - **POST** a new book
  - **PUT** (update) an existing book
  - **DELETE** a book by ID
- Input validation using **express-validator**
- Environment variables for MongoDB connection
- Unit testing with Jest

## Endpoints

| Method | Endpoint     | Description            |
|--------|--------------|------------------------|
| GET    | `/`          | Get all books          |
| POST   | `/`          | Insert a new book      |
| PUT    | `/`          | Update an existing book|
| DELETE | `/:id`       | Delete a book by ID    |

## Installation

[![NPM](https://img.shields.io/badge/NPM-v7.x-orange)](https://www.npmjs.com/)
[![Docker](https://img.shields.io/badge/Docker-19.x-blue)](https://www.docker.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.x-brightgreen)](https://www.mongodb.com/)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/busracandance/book-case-study.git
   cd book-management-api
2. **Create .env file**
    ```bash
    NODE_ENV=****
    MONGO_URL=*****
    MONGO_DB_NAME=*****
    MONGO_DB_USER=*****
    MONGO_DB_PASSWORD=*****
    PORT=******
3. **Running for locally:**
   ```bash
   npm install
   npm start
4. **Running with Docker:**
   ```bash
   docker compose up
5. **Runnig tests:**
   ```bash
   npm run test

   


