'use strict';

//tablice wielowymiarowe

var lang = []; //tablica, w której jest tablica langPl i langEn
var langPl = [];
var langEn = [];


langPl['main'] = 'Strona Główna';
langPl['about'] = 'O mnie';
langPl['portfolio'] = 'moje portfolio';
langPl['contact'] = 'skontaktuj się';

langEn['main'] = 'Main Page';
langEn['about'] = 'about us';
langEn['portfolio'] = 'My portfolio';
langEn['contact'] = 'contact us';

lang['pl'] = langPl;
lang['en'] = langEn;

//---------


function setLangLabels() {
    let langCode = this.getAttribute('lange');//odwołujemy się do atrybutu lang
    
//    console.log(lang[langCode]['portfolio']);//po przyciśnięciu pl pojawia się polski "moje portfolio", a en angielski "my portfolio"
    
    let elements = document.querySelectorAll('[lang-key]');
    
    for (let link of elements){
        let langKey = link.getAttribute('lang-key');
        link.innerHTML = lang[langCode][langKey];
         console.log(langKey);
    }
    
    
    
//    if (langCode== 'pl') {     //może być przez if, ale Krystian pokazał inaczej
//        console.log(langPl);
//    } else {
//        console.log(langEn);
//    }
}

var langPlSwitch = document.getElementById("switch-pl");
var langEnSwitch = document.getElementById("switch-en");

langPlSwitch.addEventListener("click", setLangLabels);
langEnSwitch.addEventListener("click", setLangLabels);

//----------------------------------------Zrobione
// ustawiamy domyślny język, ktory jest w html lang=""

function setDefaultLanguage(){
 var langDefault = document.documentElement.lang;
 let elements = document.querySelectorAll('[lang-key]');
   
    for (let link of elements){
     let langKey = link.getAttribute('lang-key');
        link.innerHTML = lang[langDefault][langKey];
         console.log(langKey);   
    }

}

document.addEventListener('DOMContentLoaded', setDefaultLanguage);

//var langDefault = document.getElementsByTagName("html")[0].getAttribute("lang"); lub var langDefault = document.documentElement.lang <-- to samo


