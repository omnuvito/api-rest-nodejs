var express = require('express');
var app = express();
var routesV1 = require('./src/routes/routes');

routesV1(app);

app.listen(3000, () => {
   console.log('Server running on port 3000');
});

app.get('/', function (req, res) {
   res.send('First Api Rest');
});
