"use strict";
///////////////////////////

// În JavaScript putem concatena datele astfel:

// cu operatorul +
const a = 2;
const b = 12;
const c = "fructe";
const d = "legume";

console.log(a + b); // 14
console.log(c + " " + d); // fructe legume
console.log(a + c); // 2fructe

// cu metoda pentru string si array 'concat()'
console.log(c.concat(d)); // fructelegume
console.log(c.concat(b)); // fructe12

const arr1 = ["a", 6, 12, "g"];
const arr2 = ["b", 29, "g"];
console.log(arr1 + arr2); //a,6,12,gb,29,g
console.log(arr1.concat(arr2)); // ['a', 6, 12, 'g', 'b', 29, 'g']

// cu metoda 'join()' (transforma un array in string)
const arr3 = ["a", "v", "i", "o", "n"];
console.log(arr3.join(""));

// cu operatorul '...' pentru array sau obiecte
const arr13 = [...arr1, ...arr3]; // ['a', 6, 12, 'g', 'a', 'v', 'i', 'o', 'n']

const obj1 = { name: "Ion", age: 47 };
const obj2 = { height: 168, weight: 77 };
const ion = { ...obj1, ...obj2 }; //{name: 'Ion', age: 47, height: 168, weight: 77}

/*In functie de tipul datelor concatenate javascript realizeaza o conversie a datelor pentru a obtine un rezultat.
   Exemple:
   string + number = string
   true + 1 = 2
   true + false = 1
 */
