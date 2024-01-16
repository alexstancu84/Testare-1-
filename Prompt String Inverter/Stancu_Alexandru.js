"use strict";
///////////////////////////

const btn = document.querySelector(".btn");
const output = document.querySelector(".output");

function invertString(str) {
   output.textContent = `Output: ${str.split("").reverse().join("")}`;
}

btn.addEventListener("click", () =>
   invertString(window.prompt("Insert your string below"))
);
