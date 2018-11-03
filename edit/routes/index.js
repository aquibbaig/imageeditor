var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create', function(req, res, next) {
  res.render('template');
});

router.get('/drag', function (req, res, next) {
  res.render('drag')
})

module.exports = router;
