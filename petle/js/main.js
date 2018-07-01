'use strict';
var studenci = ['Janek', 'Ola', 'Jola', 'Magda', 'Agata', 'Rafal', 'Ania', 'Kasia'];

//console.log(studenci);

for(let i=0; i<studenci.length; i++){ //pętla for
    console.log(studenci[i]);
}

for(let i=2; i<7; i++){ //pętla for- wyświetlą się elementy od Joli do Ani
    console.log(studenci[i]);
}
//
//for (let i=studenci.length-1; i>=0;i--){ //pętla for- od końca się pokażą imiona
//    console.log(studenci[i]);
//}
////-----------------------------------

studenci.forEach(function(element, index){//for each- zawsze po wszystkich elementach tablicy
    console.log(element);
});

for (let element of studenci) { //to samo co funkcja for each
    console.log(element);
}

//------------

const PI = 3.14;//stała, której nie można nadpisać
console.log(PI);
PI=6;//nie nadpisze const

//-----------
let i = 0;
while (i< studenci.length){ //pętla while
    console.log(studenci[i]);
       i++;
       }

//-------------------------
let i =0;
do {                           //pętla do while
    console.log(studenci[i]);
    i++;
} while (i<studenci.length)
    
    
    //----------------
    
    //funkcje strzałkowe -nowość
    var newOne = ( => {
                  console.log("hello world");
                  })