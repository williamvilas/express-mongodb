import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        nationality: {type: String}
    },
    {
        versionKey: false
    }
);

let Author = mongoose.model('author', authorSchema);

export default Author;

