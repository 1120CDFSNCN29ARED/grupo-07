const fs = require("fs");
const path = require("path");

function appendToFile(filePath, data) {
  fs.appendFileSync(filePath, data + "\n");
}

module.exports = (req, res, next) => {
  console.log("userLogs:" + req.originalUrl);
  next();
};
