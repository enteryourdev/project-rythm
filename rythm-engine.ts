


const board: string[][] = [[" ", " ", " ", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "]];

const playableZone: string[] = ["←", "→", "↑", "↓"];  


function makeBoard(arr: string[][] = board, arr2: string[]) {
    //
    console.log(arr.map(row => row.map(c => `[${c}]`).join(" ")).join("\n"));
    console.log(arr2.map(c => `[${c}]`).join(" "));
}

function makePlayableZone() {
    //
}

function readInput() {
    //
}

function randomFall() {
    //
}

function readSongSheet() {
    //
}

class RythmEngine {
    constructor() {
        makeBoard(board, playableZone);
    }
}

const rythmEngine = new RythmEngine();