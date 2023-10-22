const express = require("express");
const cors = require("cors");
const port = 7000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const getAllBrands = require("./routes/brands");
const getAllMercedes = require("./routes/mercedes");
const getAllAudi = require("./routes/audi");

app.use("/api/brands", getAllBrands);
app.use("/api/mercedes", getAllMercedes);
app.use("/api/audi", getAllAudi);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
