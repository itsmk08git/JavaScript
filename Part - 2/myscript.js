/**
 * Activating Strict Mode
 * It is a mode in JS that helps us to write secure JS code.
 * To active it, we write 'use strict'; at the beginning of the script.
 * It makes easier for Developers to avoid accidental errors or bugs into our code.
 * It creates visible errors for us.
*/

/**
 * without using strict
*/
let DriverLicense = false;
const passTest = true;

if (passTest) DriverLicense = true; // instead of DriverLicense, i have used DriversLicense.
                                    // Error will not be detect at console.
                                    // But using strict, error will be detected at this point.
if(DriverLicense) console.log("I can Drive.");

/**
 * Function in JS
 * Types:
 * 1) Function Declaration
 * 2) Function Expression
 * 3) Arrow Function
 */

function logger(){
    console.log("Hello, Its me MK.");
}
//calling or running or invoking function.

logger();//this doesn't produce any value cause we didn't return anything from the function.
logger();//fuction call

function fruitProcessor(apples, mango){
    console.log(apples, mango);
    const juice = `Juice with ${apples} apples and ${mango} mango.`;
    return juice;
}

const realJuice = fruitProcessor(3, 2); 
console.log(realJuice);
// we passed 3 and 2 as agruments. 
//The function returns a value ie, juice which is stored in a new variable which is than displayed in the console.

/**
 * Function Declaration
 */
function calculateAge(birthYear){
    return 2030 - birthYear;
}

const age1 = calculateAge(2000);
console.log(age1);

/**
 * Function Expression
 * In this function, we didn't give any name to it.
 * It's a function without name. Also known as Anonymous function.
 */
const calculateAge2 = function (birthYear){
    return 2030 - birthYear;
}

const age2 = calculateAge2(1999);
console.log(age1, age2);

/**
 * Arrow Function
 * It's Shorter and Faster to write.
 * return happens implicitly.
 * We can omit return if there is one liner code.
 */

const calcuAge1 = bornYear => 2034 - bornYear;
const age3 = calcuAge1(2000);
console.log(age3);

//for single parameter.
const yearUntilRetirement = bornYear => {
    const age = 2037 - bornYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearUntilRetirement(1999));

//for multiple parameters.
const yearUntilRetirement1 = (bornYear, firstName) => {
    const age = 2037 - bornYear;
    const retirement = 65 - age;
    return `${firstName} will retire after ${retirement} years.`;
}

console.log(yearUntilRetirement1(1999, "Mohan"));
console.log(yearUntilRetirement1(1990, "Ram"));

/**
 * Functions Calling Others Functions. 
 */

function cutFruitPieces(fruit){
    return fruit *4;
}

function fruitProcessor1(apples, mango){
    const applePieces = cutFruitPieces(apples);
    const mangoPieces = cutFruitPieces(mango);
    console.log(`${applePieces} pieces of apples and ${mangoPieces} pieces of mango.`);
    const juice = `Juice with ${apples} apples and ${mango} mango.`;
    return juice;
}

const realJuice1 = fruitProcessor1(3, 2); 
console.log(realJuice);

/**
 * Arrays in JS
 */
const friends = ["Mohan", "Rohan", "Raju"];
console.log(friends);

const years1 = new Array(1991, 1992, 1993, 2000);
console.log(years1);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[1]= "peter"; //Array isn't a Primitive data type. so it is mutable.
console.log(friends);

//Primitive values declared using const are immutable(unable to be changed).

const lastName = "Mohan";
const help = [lastName, "koirala", 2023-2001, friends, years1];
console.log(help);

/**
 * Basic Array Operations(Methods)
 
 * Push: It adds elements at the end of the Array.
 * unshift: It adds elements at the beigging of the Array.
 * pop: It removes the last element of the Array.
 * shift: It removes the first element of the Array.
*/

//Add Elements.
const friends1 = ["Mohan", "Rohan", "Raju"];
const newLength = friends1.push('Tina'); //Push function does return the length of the Array.
console.log(friends1);
console.log(newLength);

friends1.unshift("Pinky");
console.log(friends1);

//Remove Elements.
const popped = friends1.pop();//Last Element of the array is removed.
console.log(popped);
console.log(friends1);

const shifted = friends1.shift();//First element of the Array is Removed.
console.log(shifted);
console.log(friends1);

console.log(friends1.indexOf('Mohan'));

//For Unknown element, it returns -1.
console.log(friends1.indexOf("Ram"));

console.log(friends1.includes("Mohan"));
console.log(friends1.includes('Ram'));

if(friends1.includes("Mohan")){
    console.log('You have a Friend.');
}else{
    console.log(`You don't have a friend.`);
}

//Objects in JS

const mohanArray = [
    "Mohan",
    "Koirala",
    2058 - 2080,
    "Developer",
    ["Raju", "Gaurab", "Ayush"]
];

console.log(mohanArray);
/**
 * In above array, we can't give the array element name.
 * And to access the element of array we need to specify the index of element.
 * We can't Reference them by giving name instead we use order number.
 * 
 * But with the help of object, we can Reference them by name.
 * 
 */

const student = {
    firstName1: "Raju",
    lastName1: "Lakandri",
    age4: "23",
    job: "Officer",
    friends2: ["Mohan", "Sabin", "Roshan"]
};

console.log(student);
console.log(student.job);

console.log(student["lastName1"]);
