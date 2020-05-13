const fs = require("fs");
const path = require("path");
const packageJson = require("./package.json");

function updateDist() {
  let indexJs = fs.readFileSync(path.join(__dirname, "index.js"), "utf8");
  indexJs = indexJs.replace(
    'from "uhtml"',
    'from "http://unpkg.com/uhtml@' +
      packageJson.dependencies.uhtml +
      '?module"'
  );
  if (!fs.existsSync(path.join(__dirname, "dist"))) {
    fs.mkdirSync(path.join(__dirname, "dist"));
  }
  fs.writeFileSync(path.join(__dirname, "dist", "index.js"), indexJs);
}

updateDist();

if (process.argv.length > 2) {
  if (process.argv[2] == "watch") {
    fs.watchFile(path.join(__dirname, "index.js"), updateDist);
  }
}
