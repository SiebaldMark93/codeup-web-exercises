"use strict";
(function(){
   // question 2
    function showMultiplicationTable(number) {
        for (var i = 1; i <= 10; i++) {
            var total = i*number;
            console.log(number + ' x ' + i + ' = ' + total);
        }
    }
    showMultiplicationTable('7')

        // question 3

        //function randomValue(min, max) {
        //  return Math.floor(x: Math.random() * (max-min + 1)) min;

        for (var x = 1; x <= 10; x++) {
            var random =  (Math.floor(Math.random() * (200 - 20 + 1) + 20));
              if (random % 2 === 0) {
                console.log(random + ' is even');
            } else {
                console.log(random + ' is odd');
            }
        }

        // question 4

        function showDigitsMultipleTimes(max) {

            for(var i =1; i <= max; i++0) {

                var string = i.toString().repeat(i)
                console.log(string)

            }
        }
        showDigitsMultipleTimes('9');
        // question 5

        function subtractValueFromMax(max, subtract) {
            for (var i = max; i > 0; i -= subtract) {
                console.log(i);
            }
        }


        //  for (var i = 100; i < 20; i-= 5) {
        //      console.log(i);
        //  }


        // question 6

        // function getOddNumber(max) {
        //     var input - prompt('Input odd number less than' + max);
        //
        //     var isInputInvalid = true;
        //
        //     while (isInputInvalid) {
        //       if (parseInt(input) % 2 !== 0 && parseInt(input) <= max) break;
        //
        //       input = prompt('Input odd number less than' + max);
        //     }
        //     return input;
        // }

        // getOddNumber('5');


    //while loops

    function doubleNumber (start, max) {

            while(start < max) {
                console.log(start);
                start = start*2;
            }
    }

    doubleNumber('2', '65536');

    //Do while loops

    var allCones = Math.floor(Math.random() * 50) + 50;
    Math.floor(Math.random() * 5) + 1;


  function calculeConeSales(totalCones) {

      do {


      } while();

  }





















})();