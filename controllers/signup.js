const path=require('path');
const Signup = require('../models/signup');

exports.getSignUp = (req,res,next)=>{
  res.sendFile(path.join(__dirname,'../','views','signup.html'))
};

exports.postSignUp = (req,res,next)=>{
  const username = req.body.username;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const password = req.body.psw;
  Signup.create({
    username:username,
    email:email,
    mobile:mobile,
    password:password
  }).then(res.redirect('/login')).catch()
};