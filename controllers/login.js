const path=require('path');
const  Sequelize  = require('sequelize');
const Signup=require('../models/signup')
const Op=Sequelize.Op

exports.getLogin = (req,res,next)=>{
  res.status(200).json({"successfull":1})
};

exports.postLogin = (req,res,next)=>{
  const username = req.body.username;
  const password = req.body.password;
  Signup.findAll({where:{[Op.and]:[{username:username},{password:password}]}}).then(
    users=>{
      if(users.length==0)
      {
        res.status(400).send("alert")
      }
      else
      {
        res.status(200).send({"loggedin":1})
      }
    }
  ).catch(err=>{
      console.log(err)
    });
}