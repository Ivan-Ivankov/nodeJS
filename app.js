const express = require("express");
const { nextTick } = require("process");
const app = express();

app.get("/", function (req, res) {
  res.send(200);
});

app.get("/den", function (req, res) {
  res.send("dss");
});

app.listen(3000, () => {
  console.log("abc РАБОТАЕМ!");
});
