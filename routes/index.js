var express = require('express');
var router = express.Router();

//Index.js
router.post('/', function(req, res) {
  var post_body = req.body;
  console.log(post_body);
  res.render('index', { title: 'POST Request' });
});

//index.js
//this will respond to http://127.0.0.1:3000/about
router.get('/about', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
