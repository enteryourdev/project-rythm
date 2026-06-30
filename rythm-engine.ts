/*
how the game works.
on a board, a direction key will fall ( left, right, up, down) like tetris.
the bottom part where it shows the arrows, are the playable area.
your goal is to time it or hit it as soon as the falling direction falls to the playable area.

scoring and combos.
-
-
-


*/

const board: string[][] = [[" ", " ", " ", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "]];

const playableZone: string[] = ["←", "→", "↑", "↓"];  


function makeBoard(arr: string[][] = board, arr2: string[]) {
    //this function will create the board and playable zone
    //it 
    console.log(arr.map(row => row.map(c => `[${c}]`).join(" ")).join("\n"));
    console.log(arr2.map(c => `[${c}]`).join(" "));
}

function makePlayableZone() {
    //
}

function readInput() {
    //
}
function randomKeySpawn() {
    //
}

function readSongSheet() {
    //
}
function spawn(){
    //this handles the spawning of the blocks
}
function fall(){
    //this handles the falling of the blocks. 
    //it takes: 
    //in technical: 
    //1.
    //2.
    //3.
}
function fallSpeed(){
    //this handles the falling speed, as in the difficulty.
}
function setDifficulty(){

}

class RythmEngine {
    constructor() {
        makeBoard(board, playableZone);
    }
}

const rythmEngine = new RythmEngine();