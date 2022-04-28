const express = require("express");

const app = express();

app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
    res.json({message: "FizzBuzz Api welcome!"});
});

var server = app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

var handler = function() {
    server.close();
};

module.exports = {app, handler};