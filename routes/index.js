var express = require('express');
var router = express.Router();
var request=require('request');
var https=require('https');

/* GET home page. */
router.get('/', function (req, res, next) {
    return res.render('index', { title: 'Price Comparison'});
});

router.post('/data', function(req,res){
console.log(req.body.url);

  var URL=req.body.url
  // headers
  var headers = {
      'User-Agent':       'Super Agent/0.0.1',
      'Content-Type':     'application/x-www-form-urlencoded'
  }
// Configure the request
  var options1 = {
      url: URL,
      method: 'GET',
      headers: headers
  }
  var link,result,value

  request(options1,function(err,response,body){
      if(!err && response.statusCode==200){
          var item3=JSON.parse(body)
          res.json(item3);
      }
      });

});





router.get('/products',function(req,res,next){
  res.render('products');
})

router.get('/categories',function(req,res,next){
    res.render('categories')
})

router.get('/category',function(req,res,next){
    res.render('category')
})

router.get('/displayproduct',function(req,res,next){
    res.render('displayproduct')
})



module.exports = router;
