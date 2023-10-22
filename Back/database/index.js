const mysql = require("mysql2");
const config = require("./config");
const connection = mysql.createConnection(config);
connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("db mysql");
  }
});
module.exports = connection;
