const express = require("express");
const router = express.Router();
const { getAll, update, remove, create } = require("../controllers/audi");

router.get("/getAll", getAll);
router.put("/update/:idaudi", update);
router.delete("/delete/:idaudi", remove);
router.post("/create", create);
module.exports = router;
