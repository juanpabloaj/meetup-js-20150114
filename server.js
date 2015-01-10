var express = require('express');
var app = express();
var site = express.Router();

var port = process.env.PORT || 8080;

site.use(function(req, res, next){
  next();
});

site.route('/')
  .get(function(req, res){
    res.send('hola js meetup!');
  });

app.use('/', site);

app.listen(port);
