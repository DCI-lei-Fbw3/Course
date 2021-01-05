// Load external resources
const { prepareString } = require('./formatting');
const { showHelp } = require('./messaging');

// Handle input
let result = '';
const args = process.argv.slice(2);

if (args.includes('--help')) {
    showHelp();
}

// input goes to formatting.js then gets returned back here
result = prepareString(args[0]);

// just testing
//console.log(prepareString('kuala  lumpur'));
//console.log(prepareString('  puerto rico'));
//console.log(prepareString(' tokyo'));

console.log(result);