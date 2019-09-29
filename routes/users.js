var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool/', function(req, res, next){
  res.send('youre so cool!')
});

router.get('/error/', function(req, res, next){
  res.send('you messed up!')
});

module.exports = router;
