const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    id: {
      type: String,
      required: true
    },

    authors: {
      type: String,
      trim: true,

    },
    description: {
      type: String,

    },
    image: {
      type: String,

    },
    link: {
      type: String,
    },
    title: {
      type: String,
    }

  }
);
// 
const Books = mongoose.model("Books", bookSchema);

module.exports = Books;


