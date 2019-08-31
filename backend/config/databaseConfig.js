const mongoose = require('mongoose');

module.exports = () => {
  mongoose
    .connect('mongodb://localhost:27017/portfolio-app-3', {
      useNewUrlParser: true
    })
    .then(() => {
      console.log('MongoDB connected...');
    })
    .catch((err) => {
      console.log(err);
    });
};
