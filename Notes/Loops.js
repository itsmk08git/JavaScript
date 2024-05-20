/**Loops:
1)for -of Loop
    ->Used for looping Arrays and String.
    for(let value of strVar){
        //code
    }

    eg:**/
    let str = "Mohan"

    for(let i of str){
        console.log("i=",i);
    }

/**2)for in Loop
    ->Used for lopping objects and arrays.
    for(let key in objVar){
        //code
    }

    Eg:**/
    let student = {
        name: "Mohan",
        age : 23,
        city : "Bangalore",
        id : 21
    };

    for(let key in student){
        console.log("key=",key, "Value=",student[key]);
    }
    
/**
 * String Methods in Js
 * 1)str.toUpperCase()
        let str = "Mohan";
        let newStr = str.toUpperCase();
        console.log("newStr=",newStr);

 * 2)str.toLowerCase()
 * 3)str.trim()
 * 4)str.slice(start, end?)
 */

let items = [500,600,700,800,900,1000];

for(let i =0; i < items.length; i++){
    console.log("items=",items[i]);
    let offer = items[i] * 0.1;
    items[i] = items[i] - offer;
}

console.log(items);

let item = [100,200,300,400];

let final = items.concat(item);
console.log(final);

/**
 * Array Methods
 * 1)shift :
            Delete form starting
            Returns a value
    2)unshift:
            Add from starting
            Doesn't return a value
 */

let marvelHeros = ["thor", "Ironman", "spiderman"]

// marvelHeros = marvelHeros.shift();
// console.log("Deleted :", marvelHeros);


marvelHeros.unshift("C.America");
console.log("Added :", marvelHeros);

/**
 * 1)slice(): returns a piece of the array
 *          Syntax: slice(startldx, endldx)
 *          
 * 
 * 2)splice(): change the original array (add, remove, replace)
 *              Syntax: splice(startldx, delCount, new)
 */

let dcHeros = ["Batman", "robin", "Superman", "Cyborg"];

console.log(dcHeros.slice(1,3));  //Index 1st and 2nd will be at console

let arr = [1, 2, 3, 4, 5, 6];
arr.splice(2, 3, 12, 34, 45);
console.log(arr);