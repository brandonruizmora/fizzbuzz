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

app.get("/v1/explorers/amount/:mission", (req, res) => {
    const mission = req.params.mission;
    const totalexplorersInMission = ExplorerController.getExplorersAmonutByMission(mission);
    res.json({mission: mission, quantity: totalexplorersInMission});
});

app.get("/v1/explorers/usernames/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersUserNameInMission = ExplorerController.getExplorersUsernamesByMission(mission);
    res.json({mission: mission, explorers: explorersUserNameInMission});
});

app.get("/v1/fizzbuzz/:score", (req, res) => {
    const score = req.params.score;
    const fizzbuzz = ExplorerController.getValidationInNumber(score);
    res.json({score: score, trick: fizzbuzz});
});

var server = app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

var handler = function() {
    server.close();
};

module.exports = {app, handler};