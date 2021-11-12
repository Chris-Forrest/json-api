const express = require("express");
const bodyparser = require("body-parser");
const server = express();
const port = process.env.PORT || 3000;


server.use(bodyparser.json());

server.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
});