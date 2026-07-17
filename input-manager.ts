// basic input manager


import { readInput, isValidInput } from './rythm-engine.js';
import * as readline from "readline";
import sound from "sound-play";
import { spawn } from "child_process";

sound.play(("songs/hardmode.mp3"));
const music = spawn("powershell", [
  "-c",
  `Add-Type -AssemblyName presentationCore; ` +
  `$p = New-Object System.Windows.Media.MediaPlayer; ` +
  `$p.Open([uri]"$PWD/songs/hardmode.mp3"); ` +
  `$p.Play(); Start-Sleep -Seconds 600`
]);

readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) process.stdin.setRawMode(true);

process.stdin.on("keypress", (str, key) => {
    if (key.ctrl && key.name === 'c') {
        music.kill();
        process.exit();
    }

    
    if (key.name === "up") readInput("^");
    if (key.name === "down") readInput("⌄");
    if (key.name === "left") readInput("<");
    if (key.name === "right") readInput(">");
})