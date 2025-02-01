const fs = require("fs");
const path = require("path");

const pagesDir = path.join(__dirname, "src/pages");
const folders = fs.readdirSync(pagesDir).filter((file) => 
  fs.statSync(path.join(pagesDir, file)).isDirectory()
);

const routes = folders.map((folder) => ({
  path: folder === "home" ? "/" : `/${folder.toLowerCase()}`,
  component: folder
}));

console.log(routes);
