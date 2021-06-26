const express = require('express');
const path=require('path');
const sequelize=require('./util/database');
const bodyParser = require('body-parser');
const cors=require('cors')


const app = express();
app.use(cors());
app.use(bodyParser.json());

const signupRoutes = require('./routes/signup');
const loginRoutes = require('./routes/login');

app.use('/login', loginRoutes);
app.use('/signup', signupRoutes);

sequelize.sync().then(result=>{app.listen(4000);}).catch(err=>{})
