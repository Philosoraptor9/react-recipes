const mongoose = require('mongoose')

const connectionString = 'mongodb://localhost/musicTheory'

mongoose.connect({ useNewUrlParser: true });

mongoose.connection.on('connected', () => {
  console.log(`mongoose is connected to ${connectionString}`);
});

mongoose.connection.on('error', (err) => {
  console.log(err, 'mongoose error');
});

mongoose.connection.on('disconnected', () => {
  console.log('mongoose is disconnected');
});
