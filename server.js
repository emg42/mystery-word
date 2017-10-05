const express = require('express')
const app = express()
// const dal = require('./dal')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const session = require('express-session')
const validator = require('express-validator')
const {makeDashes, getWord, getGuesses, addGuess} = require('./dal')
// setting up mustache
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(express.static('public'))

// setting up bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


// setting up validator
app.use(validator())


app.use(session({
  secret: 'so secret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge:null }
}))



//middleware to check if a user has begin a game session
app.use(function (req, res, next) {
  if (req.session.usr) {
    req.isAuthenticated = true;
  }
  else {
    req.isAuthenticated = false;
  }
  console.log(req.isAuthenticated, 'session')
  next();
})








// Set the port
app.set('port', 3000)


app.listen(3000, function () {
  console.log('App has started at port 3000!');
})
