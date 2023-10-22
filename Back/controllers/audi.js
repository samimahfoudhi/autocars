const { getAll, update, remove, create } = require("../database/models/audi");
module.exports = {
  getAll: (req, res) => {
    getAll()
      .then((resp) => res.status(200).json(resp))
      .catch((err) => res.status(404).json(err));
  },
  update: (req, res) => {
    const idaudi = req.params.idaudi;
    const updatedData = req.body;

    update(idaudi, updatedData)
      .then((resp) => res.status(200).json(resp))
      .catch((err) => res.status(500).json(err));
  },
  remove: (req, res) => {
    const idaudi = req.params.idaudi;

    console.log(idaudi);

    remove(idaudi)
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
