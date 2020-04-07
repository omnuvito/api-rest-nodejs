var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./src/routes/user');

routes(app);

app.listen(port);

console.log(`Server running on port ${port}`);

app.get('/', function (req, res) {
   res.send('First Api Rest');
});
