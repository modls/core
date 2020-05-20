const fs = require("fs");
const path = require("path");
const packageJson = require("./package.json");

function updateDist() {
  let indexJs = fs.readFileSync(path.join(__dirname, "index.js"), "utf8");
  indexJs = indexJs.replace(/from "(.*?)"/g, (_, x) => {
    let x1 = "";
    let x2 = "";
    if (x.includes("/")) {
      if (x.substr(0, 1) === "@") {
        x1 = x.substr(0, x.indexOf("/", x.indexOf("/")));
        x2 = x.substr(x.indexOf("/", x.indexOf("/")));
      } else {
        x1 = x.substr(0, x.indexOf("/"));
        x2 = x.substr(x.indexOf("/"));
      }
    } else {
      x1 = x;
    }
    return `from "https://unpkg.com/${x1}@${packageJson.dependencies[x1]}${x2}?module"`;
  });
  indexJs = indexJs.replace(
    /import "(.*?)"/g,
    (_, x) =>
      `import "https://unpkg.com/${x1}@${packageJson.dependencies[x1]}${x2}?module"`
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
