const { getAll } = require("../database/models/brands");
module.exports = {
  getAll: (req, res) => {
    getAll()
      .then((resp) => res.status(200).json(resp))
      .catch((err) => res.status(500).json(err));
  },
};
