//Coding Challenge 1
'use strict';

const calcAverage = (a, b, c) => (a+b+c)/3;

//Test 1
const scoreDolphins = calcAverage(44,23,71);
const scoreKoalas = calcAverage(65,54,49);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas}).`);
    }else if(avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas wins (${avgDolphins} vs. ${avgKoalas}).`);
    }else{
        console.log(`No One Wins.`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(500, 200);

//Coding Challenge 2
