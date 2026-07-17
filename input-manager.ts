// basic input manager


import { readInput } from './rythm-engine.js';
import { isValidInput } from './rythm-engine.js';
import * as readline from "readline";

readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) process.stdin.setRawMode(true);

process.stdin.on("keypress", (str, key) => {
    if (key.ctrl && key.name === 'c') process.exit();

    
    if (key.name === "up") isValidInput("^");
    if (key.name === "down") isValidInput("⌄");
    if (key.name === "left") isValidInput("<");
    if (key.name === "right") isValidInput(">");
})