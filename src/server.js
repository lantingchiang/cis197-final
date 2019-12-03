const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
var mongoose = require('mongoose')
const apiRouter = require('./server/routes/apirouter.js');
const account = require('./server/routes/account.js');
const app = express();

// Connect to the database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/final-project-197-master') 
  .then(() => { 
  })
  .catch(err => { 
    console.error('App starting error:', err.stack);
    process.exit(1);
  });

app.engine('html', require('ejs').__express)
app.set('view engine', 'html')

// Set 'public' to be a static directory (any get request matches for the html files first)
app.use(express.static(path.join(__dirname, '..', 'public')));
// Register body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Register cookie session middleware
app.use(
  cookieSession({
    name: 'local-session',
    keys: ['spooky'],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
)

// Load the api and account router onto app
app.use('/api', apiRouter);
app.use('/account', account);

// Any non-api routes should be sent the html file as a response
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(3000, () => console.log('listening...'));
