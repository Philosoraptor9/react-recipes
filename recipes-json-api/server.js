const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const methodOverride = require('method-override');

mongoose.set('useCreateIndex', true);

require('./db/db');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('short'));

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use((req, res, next)=>{
    if(req.session.message){
      res.locals.message = req.session.message;
      delete req.session.message;
    }
    next();
  })
  // ^^ will send messages to the user that only last for 1 page refresh, err.message to send error messages
  // app.use() user on this page to get their info if they're logged in
  
app.use(async (req, res, next) =>{
  res.locals.user = req.session.user || {};
next()
});

// Controllers
// const authController = require('./controllers/authController');
const recipeController = require('./controllers/recipeController');

// These dictate the url paths
app.use('/recipe', recipeController);
// app.use('/auth', authController);

const port = 9000;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
  });