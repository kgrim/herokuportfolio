const express = require("express");
const app = express();

app.use(express.static("publicthree"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/publicthree/index.html");
});

app.listen(8080, () => {
    console.log("hello!");
});
