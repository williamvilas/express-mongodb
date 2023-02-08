import express from "express";
import BookController from "../controller/book.controller.js";

const router = express.Router();

router
    .get('/books', BookController.listBook)
    .get('/books/search', BookController.findByPublishingCompany)
    .get('/books/:id', BookController.findByIdBook)
    .post('/books', BookController.addBook)
    .put('/books/:id', BookController.updateBook)
    .delete('/books/:id', BookController.deleteBook);

export default router;