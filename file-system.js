const fs = require("fs");

const textFile = fs.readFileSync("welcome.txt");

const welcome = textFile.toString();

console.log(welcome);
