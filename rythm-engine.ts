/*
how the game works.
on a board, a direction key will fall ( left, right, up, down) like tetris.
the bottom part where it shows the arrows, are the playable area.
your goal is to time it or hit it as soon as the falling direction falls to the playable area.

scoring and combos.
-
-
-

glowing arrows or different looking arrows <- ← so its noticable

question i need to ask:
is it possible to overlay so it can actually overlap the text
*/
type Milisecond = 300 | 333 | 400 | 500 | 800 | 1000;
type ArrowDirection = "left" | "right" | "up" | "down";
type Difficulty = "easy" | "easy+" | "medium" | "medium+" | "hard" | "extreme"
const startProgramTime = performance.now();
const board: string[][] = [[" ", " ", " ", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
[" ", " ", " ", " "],
[" ", " ", " ", " "]];
const playableZone: string[] = ["←", "→", "↑", "↓"];  
const voidZone: string[] = [" ", " ", " ", " "];

/*
const arrowMap: Record<arrowDirection, string> = {
    left: "←",
    right: "→",
    up: "↑",
    down: "↓"
};
*/

function makeBoard(arr: string[][] = board, arr2: string[]): string[][] {
    //this function will create the board and playable zone
    //it 
    console.log(arr.map(row => row.map(c => `[${c}]`).join(" ")).join("\n"));
    console.log(arr2.map(c => `[${c}]`).join(" "));
    const newArray = arr.concat(arr2);
    return newArray;
}

function boardPrint(){
    //this prints the board, it takes in setInterval numer input
    //call fall(); per interval 
}

function makePlayableZone() {
    //this is where you can play the zone
}

function readInput() {
    //this is where it recognizes the input
}


function randomKeySpawn(arr: string[][]): string[][] {
    //random key spawn without song sheet.

    //find if there is empty first.
    const emptyCells: number[] = [];
    for (let i = 0; i < arr[0].length; i++){
        if(arr[0][i] === " ") emptyCells.push(i);
    }

    if (emptyCells.length > 0){

        const idx: number = Math.floor(Math.random() * emptyCells.length);
        const getIdxValue = emptyCells[idx];

        if (arr[0][getIdxValue] === " "){
            switch(getIdxValue){
                case 0:
                arr[0][getIdxValue] = "<"
                break;
                case 1:
                arr[0][getIdxValue] = ">"
                break;
                case 2:
                arr[0][getIdxValue] = "^"
                break;
                case 3:
                arr[0][getIdxValue] = "⌄"
                break;
            }
        }
    
    }
    return arr;
}

function readSongSheet() {
    //
}

function spawn(arr: string[][]): string[][] {
    //this handles the spawning of the blocks



    return arr;

}
function fall(arr: string[][]): string[][]{
    for (let i = arr.length - 2; i >= 0; i--){
        for (let j = 0; j < arr[i].length; j++ ){
            if (arr[i][j] !== " "){
                arr[i+1][j] = arr[i][j];
                arr[i][j] = " ";
            }
        }
    }arr[arr.length] = [" ", " ", " ", " "];
    arr[0] = [" ", " ", " ", " "]
    return arr
}


function fallSpeed(n: number){
    //this handles the falling speed, as in the difficulty.
    //this should return a number
}

function setDifficulty(){
// sets fall speed 
    fallSpeed(500); // default speed is 500ms
}

class RythmEngine {
    constructor() {
        makeBoard(board, playableZone);
    }
}

const rythmEngine = new RythmEngine();