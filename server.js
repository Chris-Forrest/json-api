const express = require("express");
const server = express();

server.use(express.json());

server.listen(3000, () => {
    console.log("Server started on port 3000")
});