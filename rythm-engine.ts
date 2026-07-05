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

type arrowDirection = "left" | "right" | "up" | "down";

function makeBoard(arr: string[][] = board, arr2: string[]): string[][] {
    //this function will create the board and playable zone
    //it 
    console.log(arr.map(row => row.map(c => `[${c}]`).join(" ")).join("\n"));
    console.log(arr2.map(c => `[${c}]`).join(" "));
    const newArray = arr.concat(arr2);
    return newArray;

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
    const randomizedVar: number = Math.floor(Math.random() * arr.length);
        switch(randomizedVar){
            case 0:
            arr[0][randomizedVar] = "<"
            break;
            case 1:
            arr[0][randomizedVar] = ">"
            break;
            case 2:
            arr[0][randomizedVar] = "^"
            break;
            case 3:
            arr[0][randomizedVar] = "⌄"
            break;
        }return arr;
    }
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