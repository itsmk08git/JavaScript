/*
    Without using Template Literals.
*/
const firstname = "Mohan";
const job = "student";
const birthyear = 2001;
const year = 2023;

const mohan = "I'm " + firstname + ", a " + (year - birthyear) + " year old " + job + "!";
console.log(mohan);


/*
    New way using template literals.
    Using Template Literals, We can write Strings in more normal and easy way.
*/
const newMohan = `I'm ${firstname}, a ${year - birthyear} year old ${job}!`;
console.log(newMohan);

/*
    Creating Multiline string.
*/

console.log(`hello everyone
I am Reading a book name Atomic Habits.`);

/*
    Taking Decisions:
    if_else statements.
*/
const age = 15;
const isOldEnough = age >= 18;
console.log(isOldEnough);

if (isOldEnough) {
    console.log(`You Can Have Driving License.`);
} else {
    const yearleft = 18 - age;
    console.log(`You Can't have a Driving License. Wait another ${yearleft} years.`);
}

/*
    Type Conversion And Coercion

    Type Conversion is when we manually convert the type form one to another.
    Type Coercion is when JavaScript Automatically converts the type from one to another. But it happens implicitly (completly hidden from us).
*/

//Example of type conversion
const inputYear = '1991';
console.log(inputYear, typeof(inputYear));
console.log(inputYear + 18);
console.log("Here inputYear stores 1991 as string. When we try adding 18, it actually concatenates the 18.");

console.log(Number(inputYear)+18);
//Number is a in-built function that converts string into Number.

//Example of Type Coercion.
console.log("I'm " + 22 + " Years Old.");
/*
    Since 22 is a Number, Js converts it implicitly to String and Concatenates it with the rest of the string. 
    If Js doesn't have the type coercion then we manually have to change the number into String using String() in-built function.
*/
console.log("20" + "23" + 11);
// + operator concatenates the string. Type coercion doesn't happen in + operator.
console.log("20" - "23" - 11);
// - operator works just opposite of + operator.
let n = '1' + 1;
n = n - 1;
console.log(n);

/*
    Truthy And Falsy Values.

    Falsy values are the values that are not exactly false but will become false if we try to convert them into boolean.
    Everything else are so called Truthy values.
    5 Falsy Values->  0 , '' , undefine , null , NaN
*/

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Mohan")); //Any string that is not an empty string is Truthy value.
console.log(Boolean("")); //Emtpy string is falsy value.
console.log(Boolean({})); //Empty object is Truthy value.
console.log(Boolean(NaN));
console.log(Boolean(null));

const money = 0;
if(money){
    console.log(`Don't Spend it all.`);
}else{
    console.log(`You Should get a job!`);
}

/**
 * == vs ===
 * == -> Loose Equality Operator.
 * === -> Strict Equality Operator.
*/
const mk = 22;
if(mk === 22){
    console.log(`Both Data type and value should be same.`);
}
if(mk ===22){
    console.log(`Value should be same or equal.`);
}

/**
 * Getting Value from web Page.
*/

// const favourite = prompt("What's Your Favourite Number?");
// console.log(favourite, typeof favourite);

/**
 * Switch Statement
*/
const day = "Monday";

switch(day){
    case "Monday":
        console.log("Go to college.");
        break;
    case "Tuesday":
        console.log("Help me if you can i'm feeling down.");
        break;
    case "Wednesday":
        console.log("But i do appericate you being round.")
        break;
    case "Thursday":
        console.log("There is a Lady.");
        break;
    case "Friday":
        console.log("Its been a Hard days Nights.");
        break;
    default:
        console.log("And i'm working like a dog.");
        break;
}

/**
 * Expression and Statements
 * Expression is a piece of code that produces some values.
 * For Example: 2 + 4 = 6.
 * 
 * Statements is like a bigger piece of code the doesn't have any values.
 * For Example: if-else staements.
 * 
 * But a String itself is an Expression that is str = "hello world.".
 */


/**
 * Conditional Operator(Ternary Operator.) 
 */
const my_age = 22;
// age >= 18 ? console.log("I like vodka.") :
// console.log("I love Water.");
const drink = my_age>= 18 ? "wine" : 'water';
console.log(drink);