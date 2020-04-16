const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const PORT = 3000;


app.use;
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});