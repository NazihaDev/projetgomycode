const express = require("express");
const asynHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const Book = require("../models/Book");
//const authMiddleware =require('../middlewares');
const generateToken = require("../utils/generateToken");
const User = require("../models/User");
const bookRouter = express.Router();

//Create Book
bookRouter.post(
  "/",
  //authMiddleware,
 // asynHandler,

  async (req, res) => {
    /*const book = await Book.create(req.body);*/
    /*const userId = JSON.stringify( req.body);
    //console.log('From server', userId);*/
    const book = await Book.create({
      title: req.body.title,
      category:req.body.category,
      createdBy:req.body.createdBy,
      author:req.body.author,
      //logmes:userId
    });
    
    if (book) {
      res.status(200);
      res.json(book);
    } else {
      res.status(500);
      res.send("Book creating failed");
    }
  }
);
//Nouvelle modification
/*
//Create Book
bookRouter.post(
  "/",
  //authMiddleware,
  // asynHandler,

  async (req, res) => {
    const book = await Book.create({
      title: req.body.title,
      category: req.body.category,
      createdBy: req.body.createdBy,
      author: req.body.author,
      description: req.body.description,
      download: 0,
      rate: 0,
    });

    if (book) {
      res.status(200);
      res.json(book);
    } else {
      res.status(500);
      res.send("Book creating failed");
    }
  }
);
//Update Book
bookRouter.put(
  "/:id",
  //authMiddleware,
  //asynchHandler
  async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (book) {
      const c = {
        title: req.body.title,
        category: req.body.category,
        createdBy: req.body.createdBy,
        author: req.body.author,
        description: req.body.description,
      };
      const updateBook = await Book.findByIdAndUpdate(req.params.id, c, {
        new: true,
        runValidators: true,
      });
      res.status(200);
      res.json(updateBook);
    } else {
      res.status(500);
      res.send("Update failed");
    }
  }
);
// Update rate
bookRouter.put(
  "/rate/:id",
  //authMiddleware,
  //asynchHandler
  async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (book) {
      const c = {
        rate: req.body.rate,
      };
      const updateBook = await Book.findByIdAndUpdate(req.params.id, c, {
        new: true,
        runValidators: true,
      });
      res.status(200);
      res.json(updateBook);
    } else {
      res.status(500);
      res.send("Update failed");
    }
  }
);
// Update downloads
bookRouter.put(
  "/down/:id",
  //authMiddleware,
  //asynchHandler
  async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (book) {
      const c = {
        download: book.download + 1,
      };
      const updateBook = await Book.findByIdAndUpdate(req.params.id, c, {
        new: true,
        runValidators: true,
      });
      res.status(200);
      res.json(updateBook);
    } else {
      res.status(500);
      res.send("Update failed");
    }
  }
);


*/
//Fetch Book

bookRouter.get(
  "/",
  //,authMiddleware,
  //asynHandler
  async (req, res) => {
    const book = await Book.find({});
    //.populate('createdBy').sort('createdAt');
    //Compare password
    if (book) {
      res.status(200);
      res.send(book);
    } else {
      res.status(500);
      res.send("There are no books");
    }
  }
);

//Update Book

bookRouter.put(
  "/:id",
  //authMiddleware,
  //asynchHandler
  async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (book) {
      const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      res.status(200);
      res.json(updateBook);
    } else {
      res.status(500);
      res.send("Update failed");
    }
  }
);

//Delete Book

bookRouter.delete(
  '/:id',
  //asynchHandler
  (async (req, res) => {
    try {
      const book = await Book.findByIdAndDelete(req.params.id);
      res.status(200);
      res.send(book);
    } catch (error) {
      res.status(500);
      throw new Error('Server Error');
    }
  })
);
//Nouvelle modification Search
/*

//Search books
bookRouter.get(
  "/search",
  //asynchHandler
  async (req, res) => {
    //res.send("search Router");
    try {
      const books = await Book.find({});
      //.populate('createdBy').sort('createdAt');
      //Compare password
      /*const cat = JSON.stringify( req.body.category);
      res.send(books[1].category);*/
     /* if (books) {
        const filteredBooks = books.filter(({ title, category, author, download, rate}) => {
          return category.includes(req.body.category) ||
          title.includes(req.body.title) ||
          author.includes(req.body.author)  ||
          download >= req.body.download ||
          rate >= req.body.rate;
        });
        res.status(200);
        res.send(filteredBooks);
      } else {
        res.status(500);
        res.send("search: There are no books");
      }
    } catch (e) {
      res.status(500);
      res.send("search: There are no books" + e);
    }
  }
);
*/
//find a book
bookRouter.get(
  '/:id',
  //asynchHandler
  (async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      res.status(200);
      res.send(book);
    } catch (error) {
      res.status(500);
      throw new Error('No book found');
    }
  })
);
module.exports = bookRouter;
