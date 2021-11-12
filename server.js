require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT;
const prefixes = require("./resources/db.json");
app.use(cors());
app.use(express.json());

app.get("/api/prefixes/", (req, res) => {
  res.send(prefixes);
});

app.listen(PORT, () => {
  console.log(`prefixes api listening on http://localhost:${PORT}`);
});
