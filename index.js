var express = require("express");
var website = express();

website.use(express.static('assets'));

website.get("/", function(req, res) {
   res.sendFile(__dirname + '/index.html');
   console.log("Home");
});

website.get("/index", function (req, res) {
    res.sendFile(__dirname + '/index.html');
    console.log("Home again");
});

website.get("/projects", function (req, res) {
    res.sendFile(__dirname + '/projects.html');
    console.log("Projects");
});

website.get("/skills", function (req, res) {
    res.sendFile(__dirname + '/skills.html');
    console.log("Skills");
});

website.get("/work", function (req, res) {
    res.sendFile(__dirname + '/work.html');
    console.log("Work");
});

website.listen(80, function () {
    console.log("Server Success!");
});
