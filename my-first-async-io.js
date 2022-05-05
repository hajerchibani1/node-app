const fs = require("fs");
let myNumber = 0;
fs.readFile(process.argv[2], "utf8", function (err, fileContents) {
  console.log(fileContents.split("\n").length - 1);
});
