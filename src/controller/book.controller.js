import Book from "../model/books.js";

class BookController {

    static listBook = (req, res) => {

        Book.find()
        .populate('author')
        .exec((error, values) => {
            res.status(200).send(values);
        });
    };

    static findByIdBook = (req, res) => {

        const id = req.params.id;

        Book.findById(id)
        .populate("author", "name")
        .exec((error, book) => {
            if (error) {
                res.status(400).send({message: `${error.message} - ID náo localizado.`});
            } else {
                res.status(200).send(book);
            }
        });
    };

    static addBook = (req, res) => {

        let book = new Book(req.body);
        book.save((err) => {

            if (err) {
                res.status(500).send({message: `${err.message} - Falha em cadastrar livro.`})
            } else {
                res.status(201).send(book.toJSON());
            }
        });
    };

    static updateBook = (req, res) => {

        const id = req.params.id;

        Book.findByIdAndUpdate(
            id, 
            {
                $set: req.body
            }, 
            (err) => {
                if (!err) {
                    res.status(200).send({message: 'O livro foi atualizado com sucesso.'});
                } else {
                    res.status(500).send({message: err.message});
                }
            }
        );
    };

    static deleteBook = (req, res) => {

        const id = req.params.id;

        Book.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: 'O livro foi removido com sucesso.'});
            } else {
                res.status(500).send({message: err.message});
            }
        });
    };


    static findByPublishingCompany = (req, res) => {

        const publishingCompany = req.query.publishing_company;

        Book.find({"publishing_company": publishingCompany}, {}, (err, books) => {
            res.status(200).send(books);
        })

    };
}

export default BookController;