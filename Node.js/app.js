const express = require("express");
const app = express();
 
app.get("/", function(request, response){
 
    response.end("Hello from Exddddpress!");
});

app.listen(3000);