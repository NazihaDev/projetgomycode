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
