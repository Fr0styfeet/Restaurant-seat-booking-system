const mongoose = require('mongoose');

const mongourl = 'mongodb+srv://anishakumarilal:RajNangare@cluster0.zl8om0k.mongodb.net/pizzadel?retryWrites=true&w=majority';

const connectToDB = async () => {
  try {
    await mongoose.connect(mongourl);
    console.log('Connected to MongoDB');

    // Fetch all documents from the "pizzas" collection
    const fetchedData = await mongoose.connection.db.collection('pizzas').find({}).toArray();
    global.pizzas=fetchedData;
    // console.log(pizzas);
    // console.log('Fetched Data:', fetchedData);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    throw error; 
  }
};

module.exports = connectToDB;
