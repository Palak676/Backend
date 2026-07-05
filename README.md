# Book Records RESTful API

## Overview

The **Book Records RESTful API** is a backend application developed using **Node.js**, **Express.js**, and **MongoDB**. It provides complete CRUD (Create, Read, Update, Delete) operations for managing book records in a MongoDB database.
The API follows RESTful principles and was tested using **Postman** to ensure all endpoints function correctly.

## Features

- Add a new book record
- Retrieve all book records
- Retrieve a book by ID
- Update book information
- Delete a book record
- RESTful API architecture
- JSON request and response format
- MongoDB database integration
- API testing using Postman

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript
- Postman
- Git
- GitHub


## Project Structure

```
book-records-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── bookController.js
│
├── models/
│   └── Book.js
│
├── routes/
│   └── bookRoutes.js
│
├── app.js
├── package.json
├── .env
└── README.md
```

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/books | Get all books |
| GET | /api/books/:id | Get a book by ID |
| POST | /api/books | Add a new book |
| PUT | /api/books/:id | Update a book |
| DELETE | /api/books/:id | Delete a book |


## Sample Request

### POST `/api/books`

```json
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "price": 499,
  "genre": "Self Help"
}
```
## 📤 Sample Response

```json
{
  "_id": "684d1234567890abcdef123",
  "title": "Atomic Habits",
  "author": "James Clear",
  "price": 499,
  "genre": "Self Help"
}
```
## 🧪 Testing

The API was tested using **Postman**.

### Tested Operations

-  GET – Retrieve all books
-  GET by ID – Retrieve a specific book
-  POST – Add a new book
-  PUT – Update book details
-  DELETE – Remove a book


## Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/book-records-api.git
```

### Navigate to the project folder

```bash
cd book-records-api
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

### Start the server

```bash
node app.js
```

## 📷 Screenshots
Screenshots of your Postman requests.
```
connection.png
get-books.png
get-book-by-id.png
add-book.png
update-book.png
delete-book.png
```


## 📚 Learning Outcomes

- Developed a RESTful API using Node.js and Express.js.
- Connected MongoDB using Mongoose for database operations.
- Implemented complete CRUD functionality for book records.
- Designed RESTful endpoints using HTTP methods (GET, POST, PUT, DELETE).
- Tested API endpoints using Postman.
- Managed source code using Git and GitHub.

## Future Enhancements

- User Authentication (JWT)
- Book Search and Filtering
- Pagination
- Input Validation
- API Documentation with Swagger
- Docker Deployment

## Designed By

**Palak Deep**
