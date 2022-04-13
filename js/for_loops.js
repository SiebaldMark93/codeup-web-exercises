"use strict";
(function(){
   // question 2
    function showMultiplicationTable(number) {
        for (var i = 1; i <= 10; i++) {
            console.log(number * i);
        }
    }

        // question 3

        for (var x = 1; x <= 10; x++) {
            var random =  (Math.floor(Math.random() * (200 - 20 + 1) + 20));
              if (random % 2 === 0) {
                console.log(random + ' is even');
            } else {
                console.log(random + ' is odd');
            }
        }

        // question 4






















})();