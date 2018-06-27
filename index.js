var express = require("express");
var website = express();


website.get("/", function(req, res) {
res.send("HOHOH");
   console.log("Home");
});


website.listen(80,function(){
    console.log("Server Success!");
});
