const Sequelize=require('sequelize')

const sequelize=new Sequelize('expense-tracker','root','vamsi027',{dialect:'mysql',host:'localhost'});

module.exports=sequelize;