
//partie like
/*const express = require("express");
const Like = require("../models/Likes");
//const authMiddleware =require('../middlewares');
//const generateToken = require("../utils/generateToken");
//import asynHandler from "express-async-handler";
//import jwt from "jsonwebtoken";

const likeRouter = express.Router();

//Create Like
likeRouter.post("/", async (req, res) => {
  const exlike = await Like.find({
    idUser: req.body.idUser,
    idBook: req.body.idBook,
  });

  if (exlike.length === 0) {
    const like = await Like.create({
      idUser: req.body.idUser,
      idBook: req.body.idBook,
    });
    if (like) {
      res.status(200);
      res.json(like);
    } else {
      res.status(500);
      res.send("like creating failed");
    }
  } else {
    res.status(500);
    res.send("Book already liked");
  }
});
//Fetch likes
likeRouter.get(
  "/",
  //,authMiddleware,
  //asynHandler
  async (req, res) => {
    const like = await Like.find({});
    if (like) {
      res.status(200);
      res.send(like);
    } else {
      res.status(500);
      res.send("There are no like");
    }
  }
);
//Fetch specefic like
likeRouter.get(
  "/splike",
  //,authMiddleware,
  //asynHandler
  async (req, res) => {
    try {
      const like = await Like.find({
        idUser: req.body.idUser,
        idBook: req.body.idBook,
      });
      if (like.length > 0) {
        res.status(200);
        res.send(like);
      } else {
        res.status(500);
        res.send("There is no like");
      }
    } catch (e) {
      res.status(500);
      res.send("There is no like " + e);
    }
  }
);
//Fetch liked books
likeRouter.get(
  "/user",
  //,authMiddleware,
  //asynHandler
  async (req, res) => {
    try {
      const like = await Like.find({
        idUser: req.body.idUser,
      });
      if (like.length > 0) {
        res.status(200);
        res.send(like);
      } else {
        res.status(500);
        res.send("There is no liked book");
      }
    } catch (e) {
      res.status(500);
      res.send("There is no liked book " + e);
    }
  }
);
//Fetch users how liked book
likeRouter.get(
  "/book",
  //,authMiddleware,
  //asynHandler
  async (req, res) => {
    try {
      const like = await Like.find({
        idBook: req.body.idBook
      });
      if (like.length > 0) {
        res.status(200);
        res.send(like);
      } else {
        res.status(500);
        res.send("There is no like for this book");
      }
    } catch (e) {
      res.status(500);
      res.send("There is no like for this book " + e);
    }
  }
);
module.exports = likeRouter;*/
