import express from "express";
import AuthorController from "../controller/author.controller.js";

const authorRouter = express.Router();

authorRouter
    .get('/author', AuthorController.listAuthor)
    .get('/author/:id', AuthorController.findByIdAuthor)
    .post('/author', AuthorController.addAuthor)
    .put('/author/:id', AuthorController.updateAuthor)
    .delete('/author/:id', AuthorController.deleteAuthor);

export default authorRouter;