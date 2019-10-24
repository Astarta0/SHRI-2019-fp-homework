import { COLORS } from '../constants';

export function getRandomColor(){
    const colorsValues = Object.values(COLORS);
    const randomIdx = getRandomIndex(colorsValues) ;
    return colorsValues[randomIdx];
}

function getRandomIndex(arr) {
    return Math.floor(Math.random() * Math.floor(arr.length));
}
