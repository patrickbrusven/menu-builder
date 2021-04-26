const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');

// connect to db
mongoose.connect(process.env.DB_CONNECTION, {
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

const app = express();

// Middleware for dependencies
app.use(bodyParser.json());
app.use(cors());

app.use('/api/menu', menu);



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
