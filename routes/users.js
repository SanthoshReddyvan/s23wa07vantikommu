var express = require('express');
var router = express.Router();

/* GET users listing. */
let sum=0
let more=0

router.get('/',(req, res)  =>{
  more++;
  sum+=more;
  res.send(`Sum is : ${sum}`);
});

module.exports = router;
