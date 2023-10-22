const express = require("express");
const router = express.Router();
const { getAll } = require("../controllers/brands");

router.get("/getAll", getAll);
module.exports = router;
