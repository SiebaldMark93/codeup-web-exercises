"use strict";
(function() {
// conditional

    // if the bill of consumed goods is greater than 20, apply a discount.
    var bill = 21;
    if (bill > 20) {
        console.log('A discount is being applied')
    }

    // If/else

    var clothes = "socks"

    if (clothes === "socks") {
        console.log("You are good to go to recess")

    } else {
        console.log("Op. That's not me... Guess I wont.")
    }

    // If/Else If/Else
    if (clothes === "socks") {
        console.log("you are good to go")

    } else if (clothes === "blue jeans") {
        console.log("I'm wearing blue jeans!  I can go to recess!")
    } else {
        console.log("That's not me")
    }

    function sayHello(input) {
        if (input === "hi") {
            alert("Hello!")
        } else {
            alert("That is not how I want to be greeted...")
        }
    }

    sayHello(input "hi");

    //Print Menu
    // 1 - Cheeseburger w/ Fries
    // 2 - Bacon Cheeseburger w/ Fries
    // 3 - Jr. Cheeseburger w/ Fries

    var userInput = parseInt(prompt(message: "What number would you like to order?"));

    function printMenu(input) {
        if (input === 1) {
            alert("Your order was; Cheeseburger w/ Fries");
        } else if (input === 2) {
            alert("Your order was: Bacon Cheeseburger w/ Fries")
        } else if (input === 3) {
            alert("Your oder was: Jr. Cheeseburger w/ Fries")
        }
    }

    // Ternary Operator

    // (condition) ? do something if true : this happens if false;

    var isLoggedIn = true;

    isLoggedIn ? console.log("you are logged in") : console.log("you need to log in");



}())