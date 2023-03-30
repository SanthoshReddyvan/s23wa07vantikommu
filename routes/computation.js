var express = require('express');
var router = express.Router();

let x;
let y;
router.get('/', function(req, res, next) {
if(req.query.x ==undefined ) {
  x=Math.floor(Math.random()*10);
  y=Math.fround(Math.random());
let o1=Math.tan(x);
let o2=Math.sqrt(y);
let o3=Math.log1p(y);
  res.send('Math.tan() applied to '+x+' and '+y+' is ' +o1+"<br>" +'Math.sqrt() applied to '+y+' and '+x+' is '+o2+"<br>"+'Math.log1p()  applied to '+y+' is'+o3); 
}
else{

  x = req.query.x;
  let o1=Math.tan(x);
  let o2=Math.sqrt(y);
  let o3=Math.log1p(y);

  res.send('Math.tan() applied to '+x+' and '+y+' is ' +o1+"<br>" +'Math.sqrt() applied to '+y+' and '+x+' is '+o2+"<br>"+'Math.log1p()  applied to '+y+' is'+o3); 
}
});

module.exports = router;