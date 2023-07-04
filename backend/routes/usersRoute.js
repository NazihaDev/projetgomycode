const express = require("express");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const asynHandler = require("express-async-handler");
const authMiddleware = require("../middlewares/authMiddleware");

//const bcrypt = require('bcryptjs');
//const jwt = require('jsonwebtoken');
//const{validation,registerValidator,loginValidator} = require('../middlewares/errorMiddlewareHandler ');
const usersRoute = express.Router();

//register

usersRoute.post(
  "/register",
  //asynHandler
  async (req, res) => {
    console.log('Inside UserRoute/post/register')
    const { name, email, password } = req.body;
    //const userExists = await User.findOne({ email: email });
    try { 
    res.status(200); 
    console.log("Creating new user");
    const userCreated = await User.create({ email, name, password })
    res.json({
        _id: userCreated.id,
        name: userCreated.name,
        password: userCreated.password,
        email: userCreated.email,
        //partie token
        //const payload = {id : userCreated._id }
        //var token = jwt.sign({payload,process.env.privateKey})
        token: generateToken(userCreated._id),
      });
    } catch (e) {
      res.status(401);
      res.send("user Exist");
      
      console.log("erreur de création");
    }
  }
);

//login

usersRoute.post(
  "/login",
  //asynHandler
  async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.isPasswordMatch(password))) {
      //set status code
      res.status(200);
      res.json({
        _id: user.id,
        name: user.name,
        password: user.password,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      res.send("Invalid credentials");
    }
  }
);

//fetch users
usersRoute.get(
  '/',
  authMiddleware,(async (req, res) => {
    try {
      const users = await User.find().populate('books');
      res.status(200);
      res.json(users);
    } catch (error) {
      res.status(500);
      res.send('No users found at the moment');
    }
  })
);

//update user video

usersRoute.put(
  '/profile/update',
  authMiddleware,
  //asynchHandler
  async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      //This will encrypt automatically in our model
      if (req.body.password) {
        user.password = req.body.password || user.password;
      }
      const updateUser = await user.save();
      res.json({
        _id: updateUser._id,
        name: updateUser.name,
        password: updateUser.password,
        email: updateUser.email,
        token: generateToken(updateUser._id),
      });
    }else {
      res.status(401);
      res.send('User Not found');
    }
  });
// Modification user recommandation 
//update user recommendations
/*usersRoute.put(
  "/profile/rec/:id",
  //authMiddleware,
  //asynchHandler
  async (req, res) => {
    const user = await User.findById(req.params.id);
    try {
      if (user) {
        user.authorRec = req.body.authorRec || user.authorRec;
        user.descRec = req.body.descRec || user.descRec;
        user.rateRec = req.body.rateRec || user.rateRec;
        user.catRec = req.body.catRec || user.catRec;
        const updateUser = await user.save();
        res.json({
          _id: updateUser._id,
          authorRec: updateUser.authorRec,
          descRec: updateUser.descRec,
          rateRec: updateUser.rateRec,
          catRec: updateUser.catRec,
          token: generateToken(updateUser._id),
        });
      } else {
        res.status(401);
        res.send("Unable to update user");
      }
    } catch (e) {
      res.send("Unable to update user " + e);
    }
  }
);
//update user status partie admin
usersRoute.put(
  "/profile/admin/:id",
  async (req, res) => {
    const user = await User.findById(req.params.id);
    try {
      if (user) {
        user.isAdmin = req.body.isAdmin;
        const updateUser = await user.save();
        res.json({
          _id: updateUser._id,
          isAdmin: updateUser.isAdmin,
          token: generateToken(updateUser._id),
        });
      } else {
        res.status(401);
        res.send("Unable to update user status");
      }
    } catch (e) {
      res.send("Unable to update user status " + e);
    }
  }
);

*/
//Delete User

usersRoute.delete(
  "/:id",
  //authMiddleware,
  //asynchHandler
  async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200);
      res.send(user);
    } catch (error) {
      res.status(500);
      res.send("Server Error");
    }
  }
);

//Profile route

usersRoute.get(
  '/profile',
  authMiddleware,
  asynHandler
  (async (req, res) => {
    try {
     //const user = await User.findById(req.user.id)
     const user = await User.findById(req.user._id).populate('books');
      //res.status(404);
      if (!user) 
      res.send(`You don't have any profile yet`);
      //throw new Error(`You don't have any profile yet`);
      res.status(200);
      res.send(user);
      //res.send('profile');
    } catch (error) {
      res.status(500);
      //throw new Error('Server error');
      res.send('Server error');
    }
   } 
  )
);
module.exports = usersRoute;
