const path=require('path');
const  Sequelize  = require('sequelize');
const Signup = require('../models/signup');
const Op=Sequelize.Op

exports.getSignUp = (req,res,next)=>{
  res.json({"successfull":1})
};

exports.postSignUp = (req,res,next)=>{
  const username = req.body.username;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const password = req.body.password;
  Signup.findAll({where:{[Op.or]:[{username:username},{email:email},{mobile:mobile}]}}).then(
    users=>{
      if(users.length==0)
      {
        Signup.create({
          username:username,
          email:email,
          mobile:mobile,
          password:password
        }).then(()=>{console.log('done');res.status(200).json('{login:1}');}).catch()
      }
      else
      {
        res.status(400).send('alert')
      }
    }
  ).catch(err=>{
    Signup.create({
    username:username,
    email:email,
    mobile:mobile,
    password:password
  }).then(()=>{console.log('done');res.status(200).json('{login:1}')}).catch()})
  
};