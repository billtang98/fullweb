var express = require("express");
var website = express();
var fs = require('fs');

outputTime();

website.use(express.static('assets'));

website.get("/", function(req, res) {
    res.sendFile(__dirname + '/index.html');
    console.log("Home");
    visitedPage("Home");
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

website.listen(5000, function () {
    console.log("Server Success!");
});

function visitedPage(data) {
    data = data + "\n";
    fs.appendFileSync('assets/visited.txt', data);
}

function outputTime() {
    var date = new Date();
    var m = date.getSeconds();
    if (m == "0") {
        var h = date.getHours();
        var m = date.getMinutes();
        var amOrPm = "PM";
        if (h < 12) {
            amOrPm = "AM";
        }
        if (h == 0) {
            h = 12;
        }
        if (h > 12) {
            h = h - 12;
        }
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;

        var time = h + ":00:00" + " " + amOrPm;
        visitedPage(time);
    }
    setTimeout(outputTime, 60000);
}
