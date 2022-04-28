const express = require("express");
const ExplorerController = require("./controller/ExplorerController");

const app = express();

app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
    res.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    res.json(explorersInMission);
});

var server = app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

var handler = function() {
    server.close();
};

module.exports = {app, handler};