const db = require("../index");
module.exports = {
  getAll: () => {
    const query = "SELECT * FROM mercedes";
    return new Promise((resolve, reject) => {
      db.query(query, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
  update: (idmercedes, updatedData) => {
    const query = "UPDATE mercedes SET ? WHERE idmercedes = ?";

    return new Promise((resolve, reject) => {
      db.query(query, [updatedData, idmercedes], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
  remove: (idmercedes) => {
    const query = "DELETE FROM mercedes WHERE idmercedes = ?";
    return new Promise((resolve, reject) => {
      db.query(query, [idmercedes], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
  create: (newData) => {
    const query = "INSERT INTO mercedes SET ?";

    return new Promise((resolve, reject) => {
      db.query(query, newData, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
};
