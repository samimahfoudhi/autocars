const db = require("../index");
module.exports = {
  getAll: () => {
    const query = "SELECT * FROM brands";
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
};
