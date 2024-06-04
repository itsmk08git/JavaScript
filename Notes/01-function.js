/**
 * Functions: 
    1)Normal Function: function add() {
        //code
    }

    add();

    2)Arrow Function: Used in Morden Js.
                      Function is stored in a variable.
    const add = (para1, para2) => {
        //code
    }
    add(para1, para2);
 */

const n1 = (str) => {
    let count = 0;
    for(let char of str) {
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    console.log(count);
};

n1("mohan");

function calculate(nums) {
    let arrayDouble = [];

    for(let i=0; i<nums.length; i++) {
        let index = nums[i];
        arrayDouble.push(index * 2);
    }
    console.log(arrayDouble)
}

calculate([2,2,3,4]);

function add(a, b) {
    console.log(a+b);
}

add(3,2);

/**
 * we can write the above function add() in another way
 * i.e; storing the function in a variable
 * 
 * const fun1 = function(a, b) {
    return a+b;
}

console.log(fun1)
 * 
 * In the above function we haven't mentioned any name to the function.
 * such function is known as anonymous function.
 * 

 */


/**
 * Function inside the Object.
 * method -> function saved inside an object.
 * 
 * Anonymous function.
 * fun: function () {
 *  console.log('hello');
 * }
 * 
 */
const obj1 = {
    num: 2,
    fun: function greeting() {
        console.log('Hello');
    }
};

obj1.fun(); 

/**
 * Function are values, anything we can do with value , we can do with function.
 * 
 * #CallBack Function.
 *-> function that is passed inside the function is called the callback function.
 */
function run(param) {
    param();
}

run(function() {
    console.log('hello21');
});