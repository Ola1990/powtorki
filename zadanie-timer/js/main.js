

function colors() {
    'use strict';
let bodyColors = $("body");
    
    bodyColors.animate({
       backgroundColor: 'green',
    },1000);
    
}
document.addEventListener("DOMContentLoaded", colors);