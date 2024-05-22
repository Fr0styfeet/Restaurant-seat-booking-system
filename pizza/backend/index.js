const express = require('express')
const app = express()
const port = 5000
const mongoDB=require("./db")
// require('dotenv').config();
mongoDB()



app.use(function(req, res, next) {  //middleware
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());

app.use('/api',require("./Routes/CreateUser"))  
app.use('/api',require("./Routes/displayData"))
app.use('/api',require("./Routes/OrderData"))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
