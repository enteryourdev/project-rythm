/*
===========Score File============








*/
//import { fallVoidZone } from "./rythm-engine";

type Score = "Miss" | "Good" | "Perfect";
const scoreRecord: Record<Score, number> = {
    "Miss": 0,
    "Good": 1,
    "Perfect": 3
}
type Combo = "Combo" | "Great Combo" | "Ultimate Combo";
const comboMultiplier: Record<Combo, number> = {
    "Combo": 2,
    "Great Combo": 5,
    "Ultimate Combo": 10
}
let totalScore: number = 0;

export function pointRinger(n: number): number{

    return totalScore += n
}