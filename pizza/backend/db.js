const mongoose = require('mongoose');

const mongourl = 'mongodb+srv://anisha:AnishaTejashree@cluster0.2wwhcgw.mongodb.net/RestroBooking?retryWrites=true&w=majority';

const connectToDB = async () => {
  try {
    await mongoose.connect(mongourl);
    console.log('Connected to MongoDB');

    // Fetch all documents from the "restro" collection
    const fetchedData = await mongoose.connection.db.collection('restros').find({}).toArray();
    global.restro=fetchedData;
    // console.log(restro);
    // console.log('Fetched Data:', fetchedData);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    throw error; 
  }
};

module.exports = connectToDB;
