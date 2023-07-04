const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
	/* Ajouter les champs downloads, rate et description
    download:{
      type:Number,
					  
    },
    description:{
      type:String,
    },
    rate:{
      type:Number,
    },*/
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
