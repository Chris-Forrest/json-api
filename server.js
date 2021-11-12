const express = require("express");
const bodyparser = require("body-parser");
const server = express();

server.use(bodyparser.json());

server.listen(3000, () => {
    console.log("Server started on port 3000")
});