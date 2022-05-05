const fs = require("fs");
module.exports = function (file, ext, callback) {
  fs.readdir(file, function (err, data) {
    if (err) {
      return callback(err, null);
    }
    let d = data.filter((el) => el.includes("." + ext) == true);
    callback(null, d);
  });
};
