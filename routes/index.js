var express = require('express');
var router = express.Router();

var offset = 200;
var images = generateArrayOfImages(500)
var methods = ['blank-page-for-control', 'none', 'native', 'lozad', 'lazyload', 'lazysizes']

function generateArrayOfImages(count) {
  const result = [];

  for (let i = 0; i < count; i++) {
    result.push(`https://picsum.photos/id/${i + offset}/1000/1000`);
  }

  return result;
}

router.get('/', function (req, res, next) {
  res.render('index', {methods});
});

router.get('/:method', function (req, res, next) {
  const method = req.params.method;

  if (!methods.includes(method)) {
    res.send(404);
  }

  res.render(method, { showInfo: true, images, info: method});
});

module.exports = router;