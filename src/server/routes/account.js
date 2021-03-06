var express = require('express')
var router = express.Router()
var path = require('path')
var User = require('../../../db/models/user.js')

router.get('/signup', function(req, res) {
  res.sendFile(path.join(__dirname, '../../../public/signup.html'))
})
  
router.post('/signup', function(req, res, next) {
  var username = req.body.username
  var password = req.body.password
  var u = new User({ username: username, password: password})
  u.save(function(err) {
    if (err) {
      next(err);
    } else if (!err) {
      res.json(u);
    }
  })
})

router.get('/login', function(_, res) {
  res.sendFile(path.join(__dirname, '../../../public/login.html'))
})

router.post('/login', function(req, res, next) {
  var username = req.body.username
  var password = req.body.password
  User.findOne({ username: username, password: password }, function(err, result) {
    if (!err && result != null) {
      //sets session.user to username and passes on with cookies
      req.session.user = username
      res.json(result);
    } else {
      next(new Error('invalid credentials'))
    }
  })
})

router.get('/logout', function(req, res) {
  req.session.user = ''
  res.redirect('/')
})

module.exports = router
