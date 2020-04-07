var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    User = require('./src/models/userModel'),
    bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://far_admin:oAzCL535PDocLlL0@far-cluster-s7vb8.mongodb.net/far?retryWrites=true&w=majority', {
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
