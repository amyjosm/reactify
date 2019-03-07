require("dotenv").config();
// Express initialization
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// Passport Configuration
require("./services/passport");

// Mongoose Connection
const connection = require("./confing/connection");
let mongoUrl;

if (process.env.MONGODB_URI) {
  mongoUrl = process.env.MONGODB_URI;
} else if (env === "test") {
  mongoUrl = "mongodb://localhost/test";
} else {
  mongoUrl = "mongodb://localhost/reactify";
}

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("morgan")("dev"));

// Serve Static Assets
app.use(express.static("app/build"));

// Add Router Middleware
app.use(require("./routes"));

connection(mongoUrl).then(function(){
  app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
  });
});

module.exports = app;
