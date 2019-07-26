// -------------------------------------------
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const lines = [];
rl.on('line', (line) => lines.push(line));
rl.on('close', (line) => process(lines));

function process(lines) { console.log(lines) };
// ------------------------------------------

