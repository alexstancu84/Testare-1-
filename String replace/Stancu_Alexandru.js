"use strict";
///////////////////////////

const stringBun = "Avionul a aterizat cu bine dupa un zbor lung";

const stringRau = stringBun.replace("bine", "greu");
console.log(stringRau); // 'Avionul a aterizat cu greu dupa un zbor lung'

/* pentru a inlocui un cuvant sau sun substring dintr-un string folosim metoda string.replace() care primeste doua argumente, primul ceea ce trebuie inlocuit un string sau un regex, al doilea este valoarea cu care vrem sa inlocuim sau o functie care returneaza aceasta valoare*/
