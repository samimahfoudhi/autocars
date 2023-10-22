const db = require("../index");
module.exports = {
  getAll: () => {
    const query = "SELECT * FROM audi";
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
  update: (idaudi, updatedData) => {
    const query = "UPDATE audi SET ? WHERE idaudi = ?";

    return new Promise((resolve, reject) => {
      db.query(query, [updatedData, idaudi], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
  remove: (idaudi) => {
    const query = "DELETE FROM audi WHERE idaudi = ?";
    return new Promise((resolve, reject) => {
      db.query(query, [idaudi], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
  create: (newData) => {
    const query = "INSERT INTO audi SET ?";

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
