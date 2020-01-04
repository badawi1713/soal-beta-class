const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));

// Register the Routes
const cashierRoutes = require('./routes/r_cashier');

// Middleware
app.use('/', cashierRoutes);

app.listen(port, ()=>{
    console.log('Listen to http://localhost:', port)
})