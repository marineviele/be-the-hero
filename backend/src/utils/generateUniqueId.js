const crypto = require("crypto");

module.exports = function generateDefaultId() {
  return crypto.randomBytes(4).toString("HEX");
};