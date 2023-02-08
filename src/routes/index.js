import express from "express";
import BookRoutes from "./book.routes.js";
import AuthorRoutes from "./author.routes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({title: 'Curso de Node'});
    });

    app.use(
        express.json(),
        BookRoutes,
        AuthorRoutes
    );
};

export default routes;