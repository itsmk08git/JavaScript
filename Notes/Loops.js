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