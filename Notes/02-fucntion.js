/**
 * #setTimeout():
 * ->This method allows us to run a function in the future.
 * ->This method calls a function after a number of milliseconds.
 * ->1 second = 1000 millisecond
 * 
 * ->Takes Two parameter: function & milliseconds.
 * 
 * ->This code is called Asynchronous Code
 * ->computer won't wait for the line to finish before going to the next line.
 * ->sets time for the function and immediately goes to the next line.
 * 
 * #Synchronous code:
 * ->will wait for one line to finish before going to the next line.
 */

setTimeout(function() {
    console.log('timeout');
    }, 3000);               //after 3sec the function will be called

console.log('Hello world');

/**
 * #setInterval():
 * ->This method keeps running the function at specified time intervals.
 * ->Also takes two parameter.
 */

setInterval(function() {
    console.log('interval.');
    }, 3000);                     //In every 3 second, the function will be invoked.

   
