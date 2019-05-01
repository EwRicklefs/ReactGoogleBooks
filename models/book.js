const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//mongo DB schema for our books. 
const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});

//For info on mongoose models, see https://mongoosejs.com/docs/models.html
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
