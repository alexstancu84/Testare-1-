"use strict";
///////////////////////////

function countDown(seconds) {
   let counter = seconds;
   setTimeout(console.log("Countdown start ! ⌚"), 1000);
   const interval = setInterval(() => {
      if (!counter) clearInterval(interval);

      counter ? console.log(`${counter} 💣`) : console.log(`BOOM !!!💥`);

      counter--;
   }, 1000);
}

countDown(10);
