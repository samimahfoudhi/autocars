const {
  getAll,
  update,
  remove,
  create,
} = require("../database/models/mercedes");
module.exports = {
  getAll: (req, res) => {
    getAll()
      .then((resp) => res.status(200).json(resp))
      .catch((err) => res.status(500).json(err));
  },
  update: (req, res) => {
    const idmercedes = req.params.idmercedes;
    const updatedData = req.body;
    console.log(updatedData, idmercedes);

    update(idmercedes, updatedData)
      .then((resp) => res.status(200).json(resp))
      .catch((err) => res.status(500).json(err));
  },
  remove: (req, res) => {
    const idmercedes = req.params.idmercedes;

    console.log(idmercedes);

    remove(idmercedes)
      .then((resp) => res.status(200).json(resp))
      .catch((err) => res.status(500).json(err));
  },
  create: (req, res) => {
    const newData = req.body;

    console.log(newData);

    create(newData)
      .then((resp) => res.status(200).json(resp))
      .catch((err) => res.status(500).json(err));
  },
};
