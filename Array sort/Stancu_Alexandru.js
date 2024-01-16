"use strict";
///////////////////////////
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");

function ascendingSort({ value }) {
   const arr = value.split(",").map((number) => Number(number));
   input.value = "";

   if (arr.includes(NaN)) {
      window.alert("Wrong input, please use this format:8,3,4,29,6,7,60,9 ");
      return;
   } else {
      const sortedArr = arr.sort((a, b) => a - b);
      output.textContent = `Output: ${sortedArr}`;
   }
}

btn.addEventListener("click", () => ascendingSort(input));
