import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        id: {type: String},
        title: {type: String, required: true},
        author: {type: mongoose.Schema.Types.ObjectId, ref: "author", required: true},
        publishing_company: {type: String, require: true},
        number_pages: {type: Number},
    }
);

let Book = mongoose.model('books', bookSchema);

export default Book;

