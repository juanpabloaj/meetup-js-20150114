var express = require('express');
var app = express();
module.exports.app = app;
var site = express.Router();

var port = process.env.PORT || 8080;

site.use(function(req, res, next){
  next();
});

site.route('/')
  .get(function(req, res){
    res.send('hola js meetup!');
  });

site.route('/api')
  .get(function(req, res){
    res.json({message:'esta es la API!'});
  });

app.use('/', site);

app.listen(port);
