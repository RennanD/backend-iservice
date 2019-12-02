require('dotenv').config()

const database = require("mongoose");

database.connect("mongodb+srv://iservices:iservices@cluster0-uvhbh.mongodb.net/testE?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useFindAndModify: true
});

module.exports = database;
