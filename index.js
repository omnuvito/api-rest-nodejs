var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    dotenv = require('dotenv');

//Models
var User = require('./src/models/userModel');

//Routes
var userRoutes = require('./src/routes/user');

dotenv.config();

//Port
var port = process.env.APP_PORT || 3000;

mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONDODB_PASSW}@${process.env.MONGODB_URL}`,
    {
       useNewUrlParser: true
    });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

userRoutes(app);

app.listen(port);

console.log(`Server running on port ${port}`);

app.get('/', function (req, res) {
   res.send('First Api Rest');
});
