const express = require('express');

const port = 8000;
const app = express();
const path = require('path');
const  expressLayouts = require('express-ejs-layouts');
const csv = require('csv-parser');
const db = require('./config/mongoose');
const bodyparser = require('body-parser');
const exp = require('constants');

//Setting layouts
app.use(expressLayouts);

//Middleware for body parser
app.use(bodyparser.json());
app.use(express.urlencoded({extended : true}));

//accessing static files from assets folder
app.use(express.static('./assets'));

//setting up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//setting up routes
app.use('/', require('./routes'));

app.listen(port, function (err) {
    if (err) {
      console.log(`Error in running  server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
  });
  

