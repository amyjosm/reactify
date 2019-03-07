// module.exports = {
//   User: require("./user")
// };

const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const db = {};

fs.readdirSync(__dirname)
  .filter(
    file =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach(file => {
    const model = require("./" + file);
    db[model.modelName] = model;
  });

module.exports = db;
