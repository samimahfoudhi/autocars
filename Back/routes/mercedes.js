const express = require("express");
const router = express.Router();
const { getAll, update, remove, create } = require("../controllers/mercedes");

router.get("/getAll", getAll);
router.put("/update/:idmercedes", update);
router.delete("/delete/:idmercedes", remove);
router.post("/create", create);
module.exports = router;
