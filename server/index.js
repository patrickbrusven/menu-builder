const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

// Middleware for dependencies

app.use(bodyParser.json());
app.use(cors());

// routes
app.get('/', (req, res) => {
  res.send('this is a home page????');
});

// connect to db
mongoose.connect(process.env.DB_CONNECTION, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
    console.log('connected to db')
  },
  error => {
    console.log("Database cound't be connected to: " + error)
  }
)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
