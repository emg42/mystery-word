// const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");
const express = require('express');
const app = express();

const mustacheExpress = require('mustache-express');
const dal = require('./dal');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

// setting up mustache
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

// setting up bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/styles.css', express.static('public'));








// Set the port
app.set('port', 3000)


app.listen(3000, function () {
  console.log('Successfully started express application!');
})
