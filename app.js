const express = require('express');
const path=require('path');
const sequelize=require('./util/database');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const signupRoutes = require('./routes/signup');

app.use('/signup', signupRoutes);
app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync().then(result=>{app.listen(4000);}).catch(err=>{})
