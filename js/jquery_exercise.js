"use strict";

// $(document).ready(function() {
//
//     alert("Dom has finished loading");
//
// });

//Class Selectors
// $('.codeup').css("border", "1px solid red");
//
// //Element Selectors
// $('li').css('font-size', '20px');
//
// $('p')
// $('hi')
// $('li')
//
// alert($('h1').html());
//
// //Multiple Selectors
// $('p, h1, li');

// Remove your custom jQuery code from previous exercises.

//     Add jQuery code that will change the background color of an h1 element when clicked.
$('h1').click(function () {
    $('h1').css("background-color", "blue")
});

//option 2
// $('h1').click(function(e) {
//     e.target.style.backgroundColor = 'blue';
// })

//     Make all paragraphs have a font size of 18px when they are double clicked.
$('p').dblclick(function () {
    $('p').css('font-size', '18px');
});

//option 2
// $('p').dblclick(function(e) {
//     e.target.style.fontSize = '18px';
// })

//     Set all li text color to red when the mouse is hovering; reset to black when it is not.

$('li').hover(function () {
    $(this).css('color', 'red')
},
    function () {
    $(this).css('color', 'black');
    })