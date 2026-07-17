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


bug log:
7/14/2028 - the frist key arrows disappear, it needs to be reinstated everytime. 



current tackle: 
i need a function that records what buttons are available at catch row.
in that function i will have performance.now(); immediately after it is available.

and i need a function after a keypress listener
keypress listener will go to isValid. it will see if there is a button matching there.
> if so then it will get performance.now() then... 
> if not minus point inputed too fast or slow!
> I need to figure out how to record values
*/
import { pointRinger } from "./score.js";
import { totalScore } from "./score.js";
import {reactionScore} from "./score.js"
//import * as score from "./score"; //dw

type Millisecond = 300 | 333 | 400 | 500 | 800 | 1000;
type ArrowDirection = "left" | "right" | "up" | "down";
type Difficulty = "easy" | "easy+" | "medium" | "medium+" | "hard" | "extreme"
const DifficultyRecord: Record<Difficulty, Millisecond> = {
    easy: 1000,
    "easy+": 800,
    medium: 500,
    "medium+": 400,
    hard: 333,
    extreme: 300
}
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
let CATCH_ROW: number = 0;
let VOID_ROW: number = 0;
const FALLING: Record<string, string> = { "←": "<", "→": ">", "↑": "^", "↓": "⌄" };
const FALLING_NOTE = Object.values(FALLING);
let CATCH_MS: Record<string, number> = {
    "<": 0,
    ">": 0,
    "^": 0,
    "⌄": 0
}
const CATCHING_NOTE = Object.keys(CATCH_MS);
const CATCHING_VALUE = Object.values(CATCH_MS);

function makeBoard(arr: string[][] = board, playable: string[], voidZone: string[]): string[][] {
    //this function will create the board and playable zone
    //it 
    console.log(arr.map(row => row.map(c => `[${c}]`).join(" ")).join("\n"));
    console.log(playable.map(c => `\x1b[32m[${c}]\x1b[0m`).join(" "));
    const newArray = arr.concat([[...playable]], [[...voidZone]]);
    CATCH_ROW = newArray.length-2
    VOID_ROW = newArray.length-1
    return newArray;
}

function boardPrint(arr: string[][]){
    //this prints the board, it takes in setInterval numer input
    //call fall(); per interval 
    console.log(arr.map(row => row.map(c => `[${c}]`).join(" ")).join("\n"));
    console.log(`Total Score: ${totalScore}`);

/*    console.log(
  arr.map((row, i) =>
    row.map(c => i === CATCH_ROW ? `\x1b[32m[${c}]\x1b[0m` : `[${c}]`).join(" ")
  ).join("\n")
);*/
}

export function isValidInput(note: string) { // get the catch row only and scan using i++ 
    //
    //if (CATCHING_VALUE.find(x => x > 0)){
        return readInput(note);
   // }else{
        //console.log("Too FAST!")
    //}
}

export function readInput(note: string): number { // DEEP DIVE
    const elapsed = elapsedTime(note); // capture BEFORE zeroing, or it reads the wiped stamp

    if (elapsed < rythmEngine.speed) {
        CATCH_MS[note] = 0;                       // burn the note no double catch
        const col = rythmEngine.board[CATCH_ROW].indexOf(note);
        if (col !== -1) rythmEngine.board[CATCH_ROW][col] = " "; // remove from board
        return reactionScore(elapsed);
    } else {
        return pointRinger(-1); // pressed with nothing there / too late
    }
}

export function valueTimer(arr: string[]){
    const startTime = performance.now();
    const found = arr.filter(x => FALLING_NOTE.includes(x));

    for (let i = 0; i < found.length; i++){
        CATCH_MS[found[i]] = startTime; //start the timer
    }
}
export function elapsedTime(note: string): number {
    return performance.now() - CATCH_MS[note];
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


function spawn(arr: string[][]): string[][] {
    //this handles the spawning of the blocks

    return arr;
}

function fall(arr: string[][]): string[][]{

    //if(arr[VOID_ROW].some(x => x !== " ")) arr[VOID_ROW] = fallVoidZone(arr[VOID_ROW]); // i put this up here to check.


    for (let i = arr.length - 2; i >= 0; i--){
        for (let j = 0; j < arr[i].length; j++ ){
            if (arr[i][j] !== " "){
                arr[i+1][j] = arr[i][j];
                arr[i][j] = " ";
            }
        }
    }//arr[VOID_ROW] = [" ", " ", " ", " "];
    // combos -> arr[VOID_ROW].some(x => Object.values(FALLING).includes(x))

    if(arr[VOID_ROW].some(x => x !== " ")) arr[VOID_ROW] = fallVoidZone(arr[VOID_ROW]);
    if(arr[CATCH_ROW].includes(" ")) arr[CATCH_ROW] = fallPlayableZone(arr[CATCH_ROW]);
    if(arr[CATCH_ROW].some(x => FALLING_NOTE.includes(x))) valueTimer(arr[CATCH_ROW]);

    return arr
}
function fallPlayableZone(arr: string[]): string[]{
    //goal is to 
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === " "){
            arr[i] = playableZone[i];
        }
    }
    return arr
}
function fallVoidZone(arr: string[]): string[]{
    //how many is in here? if its here, minus points for each one.
    let totalMiss = 0;
    for (let i = 0; i < arr.length; i++){
            if (FALLING_NOTE.includes(arr[i])){
                totalMiss--;
        }

        arr[i] = " "
    }
    if (totalMiss < 0) pointRinger(totalMiss);
    return arr
}

//
//setting section
//
function fallSpeed(n: Millisecond): Millisecond{
    //this handles the falling speed, as in the difficulty.
    //this should return a number
    rythmEngine.stopInterval();
    return n;
}
function setDifficulty(diff: Difficulty): Millisecond{
// sets fall speed 
// or any other difficulty modifier, but currently sets speed
    return DifficultyRecord[diff]; // default speed is 500ms
}
function readSongSheet() {
    //Handles Song Sheets
}



/*
>   CLASS SECTION
>   
>   
*/

class RythmEngine {
    public speed: Millisecond = 1000;
    public interval?: ReturnType<typeof setInterval>;
    public board: string[][] = [];

    constructor() {
        this.board = makeBoard(board, playableZone, voidZone); // initializes the board, add void ig
        boardPrint(this.board);
        this.startSettings();

        this.startInterval();
    }

    startGame(){ // does everything
    //spawn -> fall -> spawns key -> print board
            spawn(this.board);
            fall(this.board);
            if (Math.random() < 0.9) randomKeySpawn(this.board);
            boardPrint(this.board);
    }

    
    startSettings(){
        this.speed = setDifficulty("hard");
    }
    startInterval(){ //this should print out the board, and basically run the game.
        this.interval = setInterval(() => this.startGame(),this.speed);
    }

    stopInterval(){
        clearInterval(this.interval);
    }
    changeSpeed(n: Millisecond){
        this.speed = n;
        clearInterval(this.interval);
        setTimeout(() => this.startInterval(), 3000); //starts after 3 seconds
    }

}

const rythmEngine = new RythmEngine();