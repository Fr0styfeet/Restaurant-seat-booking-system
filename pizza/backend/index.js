const express = require('express');
const app = express();
const mongoDB = require('./db');

mongoDB();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());

app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/displayData'));
app.use('/api', require('./Routes/OrderData'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = 5000; 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
