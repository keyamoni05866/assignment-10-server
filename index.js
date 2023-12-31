const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const chefs = require("./data/Chef.json");

app.use(cors());
app.get("/", (req, res) => {
  res.send("Chef is coming soon");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  const selectedChefs = chefs.find((c) => c._id == id);
  res.send(selectedChefs);
});

app.listen(port, () => {
  console.log(`Chef API is running on port:${port}`);
});
