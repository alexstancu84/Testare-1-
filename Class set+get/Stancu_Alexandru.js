"use strict";
///////////////////////////

class Person {
   constructor(firstName, lastName) {
      this._firstName = firstName;
      this._lastName = lastName;
   }

   get firstName() {
      return this._firstName;
   }

   get lastName() {
      return this._lastName;
   }

   set firstName(name) {
      typeof name === "string"
         ? (this._firstName = name)
         : console.error("Please enter a string value.");
   }
   set lastName(name) {
      typeof name === "string"
         ? (this._lastName = name)
         : console.error("Please enter a string value.");
   }
}

const person1 = new Person("Dorel", "Viorel");
console.log(person1);

person1.firstName = 22;
person1.firstName = "Alin";
person1.lastName = "Cornel";

console.log(person1.firstName);
console.log(person1.lastName);
