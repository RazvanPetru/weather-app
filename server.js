const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use;
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/public", express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE" // what matters here is that OPTIONS is present
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
