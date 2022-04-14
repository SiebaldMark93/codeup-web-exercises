(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    // var names = ['Mark', 'Monica', 'Aiden', 'Jason'];
    // console.log(names);


    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    // var numberOfNames = names.length
    // console.log(numberOfNames);


    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    // for (var i = 0; i < names.length; i += 1) {
    //     console.log(names[i]);
    // }



    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    //var names = ['Mark', 'Monica', 'Aiden', 'Jason'];
    //for (var i= 0; i < names-1; i+=1) {
    //    console.log(names[i]);
    //}

    //console.log(names);


    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */


    var names = ['Mark', 'Monica', 'Aiden', 'Jason'];
    names.forEach(function(element, index, array) {
        console.log(element);
        console.log(index);
        // console.log(array);
    });



    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */






})();