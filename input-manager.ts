// basic input manager


import { readInput, isValidInput } from './rythm-engine.js';
import * as readline from "readline";
import sound from "sound-play";


readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) process.stdin.setRawMode(true);

process.stdin.on("keypress", (str, key) => {
    if (key.ctrl && key.name === 'c') process.exit();

    
    if (key.name === "up") readInput("^");
    if (key.name === "down") readInput("⌄");
    if (key.name === "left") readInput("<");
    if (key.name === "right") readInput(">");
})

//sound.play("");