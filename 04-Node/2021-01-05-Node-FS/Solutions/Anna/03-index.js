const showHelp = require("./03-messaging");
const {
  removeWhitespace,
  removeSymbols,
  capitaliseInitial,
} = require("./03-formatting");

const args = process.argv.slice(2);
if (args.includes("--help")) {
  showHelp();
  process.exit();
}

function formatString() {
  let formattedString = removeWhitespace(args);
  formattedString = removeSymbols(formattedString);
  return capitaliseInitial(formattedString);
}

console.log(formatString());
