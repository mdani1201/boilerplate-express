let express = require("express");


let app = express();

require('dotenv').config();


app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
  const hello = "Hello json";
  const messageStyle = process.env.MESSAGE_STYLE;
  console.log(messageStyle);

  if (messageStyle === "uppercase") {
    res.json({ message: hello.toUpperCase() });
  } else {
    res.json({ message: hello });
  }
});

module.exports = app;
