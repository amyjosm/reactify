const mongoose = require("mongoose");

module.exports = function(databaseURL){
  mongoose.Promise = Promise;
  return mongoose.connect(databaseURL, { useNewUrlParser: true });
}
