"use strict";

// const demoId = document.getElementById('demo');
// console.log(demoId);
//
// demoId.style.border = "1px solid purple";


const demoClass = document.getElementsByClassName('demo');
console.log(demoClass);
// demoClass[0].style.border = '1px solid orange';

for (i = 0; i < demoClass.length; i++) {
    demoClass[i].style.border = '1px solid orange';
}