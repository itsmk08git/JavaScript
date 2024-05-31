/**
 * DOM : Document Object Model
 * 
*/

/**
 * Window Object:
 * The window object represents an open window in a browser.
 * It is browser's object and automatically created by browser.
 * It's a global object.
 */

/**
 * DOM Manipulation
 * 1)selecting with id: document.getElementById("myId")
 * 
 * 2)selecting with class: document.getElementByClassName("myClass")
 * 
 * 3)selecting with tag: document.getElementByTagName("p")
 * 
 * Query Selectors
 * 1)document.querySelector("myId/myClass/tag") //returns first element
 * 
 * 2)document.querySelectorAll("myId/myClass/tag")  //returns a NodeList
 * 
 * 
 * =>PROPERTIES:
 * tagName: returns tag for element nodes
 * innerText: returns the text content of the element and all its children
 * innerHTML: returns the plain text to or HTML contents in the elements
 * textContent: returns textual content even for hidden elements
 * 
 */

 // console.log(document.querySelector('button').innerHTML);  
        //     //Every HTML has a property .innerHTML

        // document.querySelector('button').innerHTML = 'Welcome'

        // const buttonElement= document.querySelector(".js-button");
        // console.log(buttonElement);
        /* document.body.innerHTML = 'Hello';
         document.title = 'Rock Paper'
         document.body.innerHTML = '<button>Good Job</button>';
        */