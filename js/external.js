"use strict";

console.log('Hello from external JavaScript');

alert('Welcome to my Website!');


var favcolor = prompt('What is your favorite color?');
alert('Great! ' + favcolor + ' is my favorite color too!');

//You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

let totalToPay = 0;
let littleMermaidDaysRented = Number(prompt('How many days did you rent Little Mermaid?'));
let BrotherBearDaysRented = Number(prompt('How many days did you rent Brother Bear?'));
let herculesDaysRented = Number(prompt('How many days did you rent Hercules?'));
let rentPricePerDay = Number(prompt('What was the rental price per day?'));
let totalDaysRented = littleMermaidDaysRented + BrotherBearDaysRented + herculesDaysRented

let totalPriceDollars = (littleMermaidDaysRented + BrotherBearDaysRented + herculesDaysRented) * rentPricePerDay;

alert('The total number of days rented was ' + totalDaysRented);
alert('The price payed was $' + totalPriceDollars);


//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.


let googlePayDollars = Number(prompt('How much does Google pay per hour?'));
let amazonPayDollars = Number(prompt('How much does Amazon pay per hour?'));
let facebookPayDollars = Number(prompt('How much does Facebook pay per hour?'));
let googlePayThisWeek = Number(prompt('How many hours did you work this week at Google?'));
let amazonPayThisWeek = Number(prompt('How many hours did you work this week at Amazon?'));
let facebookPayThisWeek = Number(prompt('How many hours did you work this week at Facebook?'));




let googlePayment = 400 * 6
let amazonPayment = 380 *4
let facebookPayment = 350 * 10

let totalPaymentThisWeek = googlePayment + amazonPayment + facebookPayment

alert('The total amount of money made this week was $' + totalPaymentThisWeek);

//A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.




let classNotFull = prompt('Is the class full?');
let classNotConflictCurrentSchedule = prompt('Does this conflict with your schedule');

let enrolled = classNotFull && classNotConflictCurrentSchedule


alert('Congratulations, you are enrolled');

//A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.



