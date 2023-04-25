const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


// connect to MongoDB
mongoose.connect('mongodb+srv://soni:root@todolist.gy1uelq.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// create a schema for your data
const userSchema = new mongoose.Schema({
  id: Number,
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  income: String,
  city: String,
  car: String,
  quote: String,
  phone_price: String,
});

// create a model for your data
const User = mongoose.model('User', userSchema);

// Enable CORS for all routes
app.use(cors());

// define your API routes
app.get('/api/users', async (req, res) => {
  try {
    // fetch data from the database based on your criteria
    const users = await User.find({
      income: { $lt: '$5 USD' },
      car: { $in: ['BMW', 'Mercedes'] },
    });
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/users/bmw-mercedes-income', async (req, res) => {
    try {
      const users = await User.find({ 
        $and: [ 
          { car: { $in: ['BMW', 'Mercedes'] } }, 
          { income: { $lt: '$5' } }
        ] 
      });
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });
  
  app.get('/users/male-high-phone-price', async (req, res) => {
    try {
      const users = await User.find({ 
        $and: [ 
          { gender: 'Male' }, 
          { phone_price: { $gt: '10000' } }
        ] 
      });
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });

  app.get('/users/quote-email-m', async (req, res) => {
    try {
      const users = await User.find({ 
        $and: [
          { last_name: /^M/ }, 
          { quote: { $regex: /.{15,}/ } }, 
          { email: { $regex: new RegExp(`.*${last_name}.*`) } }
        ] 
      });
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });

  app.get('/users/bmw-mercedes-audi-no-digit-email', async (req, res) => {
    try {
      const users = await User.find({ 
        $and: [
          { car: { $in: ['BMW', 'Mercedes', 'Audi'] } }, 
          { email: { $not: { $regex: /\d/ } } }
        ] 
      });
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });

  
  app.get('/users/top-cities', async (req, res) => {
    try {
      const cities = await User.aggregate([
        { $group: { _id: '$city', count: { $sum: 1 }, totalIncome: { $sum: { $toDouble: '$income' } } } },
        { $sort: { count: -1 } },
        { $limit: 10 },
        { $project: { _id: 0, city: '$_id', count: 1, averageIncome: { $divide: ['$totalIncome', '$count'] } } }
      ]);
      res.json(cities);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });
  

// start the server
app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
