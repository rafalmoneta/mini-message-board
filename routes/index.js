var express = require('express');
var router = express.Router();

const messages = [ 
  { text: "Hi there!", user: 'Amando', added: new Date().toDateString() }, 
  { text: 'Hello World!', user: 'Charles', added: new Date().toDateString() },
  { text: 'Created while learning nodejs 👨‍🚀', user: 'Rafał', added: new Date().toDateString() }
]; 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'Mini message board', messages: messages });
});

router.get('/new', function(req, res, next){
  res.render('form', {page: 'Form - write a message'})
});

router.post('/new', function(req, res, next){
  // let date = new Date();
  messages.push({
    text: req.body.messageText,
    user: req.body.userName,
    added: new Date().toDateString()
  });
  res.redirect("/");
})

module.exports = router;
