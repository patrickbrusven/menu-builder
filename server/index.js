const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.DB_CONNECTION;

// connect to db
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useFindAndModify: false,
  useNewUrlParser: true
}).then(() => {
    console.log('connected to db')
  },
  error => {
    console.log("Database cound't be connected to: " + error)
  }
)

// routes
const menu = require('./routes/menuAPI.js');
const authRoute = require('./routes/Authorization.js');

const app = express();

// Middleware for dependencies
app.use(bodyParser.json());
app.use(cors());

app.use('/api/menu', menu);
app.use('/api/user', authRoute);

if (process.env.NODE_ENV === 'production') {
  // static folder
  app.use(express.static(__dirname + '/public/'));

  // handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
