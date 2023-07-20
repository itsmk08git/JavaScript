/**
    Coding Challange - 1
**/

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

/*
    Coding Challange - 2
*/
if(BMIMark > BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})!`);
}else{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})!`);
}

/**
 * Coding Challenge - 3
*/

const scoreDolphins = (96+108+89)/3;
const scoreKoalas = (89+94+110)/3;
console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas){
    console.log("Dolphins wins the Trophy.");
}else if(scoreKoalas < scoreDolphins){
    console.log("Koalas Wins the Trophy.");
}else if(scoreDolphins === scoreKoalas){
    console.log("Both Teams wins the Trophy.");
}