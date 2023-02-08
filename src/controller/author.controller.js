import Author from "../model/author.js";

class AuthorController {

    static listAuthor = (req, res) => {

        Author.find((error, values) => {
            res.status(200).send(values);
        });
    };

    static findByIdAuthor = (req, res) => {

        const id = req.params.id;

        Author.findById(id, (error, Author) => {
            if (error) {
                res.status(400).send({message: `${error.message} - ID náo localizado.`});
            } else {
                res.status(200).send(Author);
            }
        });
    };

    static addAuthor = (req, res) => {

        let author = new Author(req.body);
        author.save((err) => {

            if (err) {
                res.status(500).send({message: `${err.message} - Falha em cadastrar autor.`})
            } else {
                res.status(201).send(author.toJSON());
            }
        });
    };

    static updateAuthor = (req, res) => {

        const id = req.params.id;

        Author.findByIdAndUpdate(
            id, 
            {
                $set: req.body
            }, 
            (err) => {
                if (!err) {
                    res.status(200).send({message: 'O autor foi atualizado com sucesso.'});
                } else {
                    res.status(500).send({message: err.message});
                }
            }
        );
    };

    static deleteAuthor = (req, res) => {

        const id = req.params.id;

        Author.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: 'O autor foi removido com sucesso.'});
            } else {
                res.status(500).send({message: err.message});
            }
        });
    };
}

export default AuthorController;