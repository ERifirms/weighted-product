const express = require("express");
const ejsMate = require("ejs-mate");
const path = require("path");
const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/WeightedProduct.routes"));

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
