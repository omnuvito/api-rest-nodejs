var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    User = require('./src/models/userModel'),
    bodyParser = require('body-parser'),
    dotenv = require('dotenv');

dotenv.config();

var port = process.env.APP_PORT || 3000;

mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONDODB_PASSW}@${process.env.MONGODB_URL}`,
    {
       useNewUrlParser: true
    });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./src/routes/user');

routes(app);

app.listen(port);

console.log(`Server running on port ${port}`);

app.get('/', function (req, res) {
   res.send('First Api Rest');
});
