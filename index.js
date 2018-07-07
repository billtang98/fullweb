var express = require("express");
var website = express();
var fs = require('fs');

startingServer();
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
    fs.appendFileSync('../data/visited.txt', data);
}

function outputTime() {
    var date = new Date();
    var m = date.getMinutes();
    if (m == "0") {
        var h = date.getHours();
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

        var time = h + ":00:00" + " " + amOrPm;
        visitedPage(time);
    }
    setTimeout(outputTime, 60000);
}

function startingServer() {
    var initialDate = new Date();
    var date = initialDate.getDate();
    var month = initialDate.getMonth();
    var h = initialDate.getHours();
    var m = initialDate.getMinutes();
    var s = initialDate.getSeconds();
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
    if (month == 0) {
        month = "January";
    }
    else if (month == 1) {
        month = "Feburary";
    }
    else if (month == 2) {
        month = "March";
    }
    else if (month == 3) {
        month = "April";
    }
    else if (month == 4) {
        month = "May";
    }
    else if (month == 5) {
        month = "June";
    }
    else if (month == 6) {
        month = "July";
    }
    else if (month == 7) {
        month = "August";
    }
    else if (month == 8) {
        month = "September";
    }
    else if (month == 9) {
        month = "October";
    }
    else if (month == 10) {
        month = "November";
    }
    else {
        month = "December";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    var message = "The server started";
    var time = month + " " + date + " " + h + ":" + m + ":" + s + " " + amOrPm;
    visitedPage(message);
    visitedPage(time);
}
