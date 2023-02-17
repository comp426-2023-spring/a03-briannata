import minimist from "minimist";
import { rps } from "../lib/rpsls.js"

// get command line arguments

const args = minimist(process.argv.slice(2), {alias: { h: 'help', r: 'rules' },'--': true});

// if -h, print help message

if (args.h){
    console.log(`Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)
    
      -h, --help      display this help message and exit
      -r, --rules     display the rules and exit
    
    Examples:
      node-rps        Return JSON with single player RPS result.
                      e.g. {"player":"rock"}
      node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                      e.g {"player":"rock","opponent":"scissors","result":"win"}
    `);
    process.exit(0);
}

if (args.r) {
    console.log(`Rules for Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors
    `);
    process.exit(0);
}

if(args._.length == 0) {
  console.log(rps());
  process.exit(0);
}

let result = rps(args._[0]);
if(result == undefined) {
  console.log("Please try 'rock', 'paper', or 'scissors'.");
  console.log(`Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)
    
      -h, --help      display this help message and exit
      -r, --rules     display the rules and exit
    
    Examples:
      node-rps        Return JSON with single player RPS result.
                      e.g. {"player":"rock"}
      node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                      e.g {"player":"rock","opponent":"scissors","result":"win"}
    `);
    console.log(`Rules for Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors
    `);
    process.exit(0);
} else {
  console.log(result);
  process.exit(0);
}