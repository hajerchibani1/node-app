const fs = require("fs");

fs.readdir(process.argv[2], function (err, list) {
  list.filter((el) => {
    el.includes("." + process.argv[3]) == true && console.log(el);
  });
});
