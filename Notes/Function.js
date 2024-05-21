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

const num = (str) => {
    let count = 0;
    for(let char of str) {
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    console.log(count);
}

num("mohan");
