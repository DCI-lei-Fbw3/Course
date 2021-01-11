// Tasks:
// - Get the current directory
// - Check if a directory exists (to check if there is a folder with .git)

const fs = require("fs");
const path = require("path");
const process = require("process");

module.exports = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },

  directoryExists: (filePath) => {
    return fs.existsSync(filePath);
  },
};
