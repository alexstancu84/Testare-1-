"use strict";
///////////////////////////

const amestec = ["mere", "cirese", 2, "portocale", 10, 30];

/* Filtrarea unui array se face cu metoda 'filter()' care primeste un callback function care se plica pentru fiecare element din array, daca functia respectiva. In urma iteratiei rezulta un nou array cu elementele care au satisfacut conditia specificata in functia callback folosita*/

const fructe = amestec.filter((element) => typeof element === "string");
console.log(fructe); // ['mere', 'cirese', 'portocale']

const cifre = amestec.filter((element) => typeof element === "number");
console.log(cifre); // [2, 10, 30]
