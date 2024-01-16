"use strict";
///////////////////////////

const url = window.location.href;
const word = "index";
const index = url.indexOf(word);

console.log(`Indexul primei apariții a cuvântului în URL: ${index}`);
