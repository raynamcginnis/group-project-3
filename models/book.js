const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// schema for adding new cheatsheets to the database
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
