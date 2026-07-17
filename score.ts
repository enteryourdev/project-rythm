/*
===========Score File============








*/
//import { fallVoidZone } from "./rythm-engine";

type Score = "Miss" | "Good" | "Perfect";
const scoreRecord: Record<Score, number> = {
    "Miss": -1,
    "Good": 1,
    "Perfect": 3
}
type Combo = "Combo" | "Great Combo" | "Ultimate Combo";
const comboMultiplier: Record<Combo, number> = {
    "Combo": 2,
    "Great Combo": 5,
    "Ultimate Combo": 10
}
export let totalScore: number = 0;
let totalCorrect = 0;

export function pointRinger(n: number): number{
    if (n > 0) totalCorrect += 1
    else totalCorrect = 0; 

    const multiplier = comboScore(totalCorrect) ?? 1;

    return totalScore += n * multiplier
}

export function reactionScore(n: number): number{

    if(n < 250){
        return pointRinger(scoreRecord.Perfect);
    }else if(n <= 500){
        return pointRinger(scoreRecord.Good);
    }else{
        return pointRinger(scoreRecord.Miss);
    }
}

export function comboScore(n: number): number | undefined{
    if (n >= 30) return comboMultiplier["Ultimate Combo"];
    if (n >= 20) return comboMultiplier["Great Combo"];
    if (n >= 10) return comboMultiplier["Combo"];
    return undefined;
}
