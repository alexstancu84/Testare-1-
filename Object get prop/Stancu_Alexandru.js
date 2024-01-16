"use strict";
///////////////////////////
const text = document.querySelector(".text");

const alin = {
   _name: "Alin Alinescu",
   _age: 55,
   _height: 180,
   _weight: 78,
   get name() {
      return this._name;
   },
   get age() {
      return this._age;
   },
   get height() {
      return this._height;
   },
   get weight() {
      return this._weight;
   },
};

const info = `${alin.name} is ${alin.age} years old, ${alin.height} cm and weighs ${alin.weight}`;

console.log(info);

text.textContent = `${alin.name} is ${alin.age} years old, ${alin.height} cm and weighs ${alin.weight} kg.`;
