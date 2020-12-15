/* There are mainly two types of loops:
- Entry Controlled loops: In this type of loops the test condition is tested before entering the loop body. 
-- For Loop and While Loop are entry controlled loops.
- Exit Controlled Loops: In this type of loops the test condition is tested or evaluated at the end of loop body. Therefore, the loop body will execute atleast once, irrespective of whether the test condition is true or false. 
-- do – while loop is exit controlled loop.
We had to put our most specific match at the top and then filter down our checks to most general. Coding involves much head banging and hair pulling. Sometimes when you think you have it, you are probably correct, and just have a syntax error or need to rearrange something. Let’s wrap it in a function so we can call it and reuse it, following best practices, and see our final solution.*/

// function fizzBuzz(n) {
//   for (i = 0; i <= n; i++) {
//     console.log(i);
//   }
// };

// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log("fizzBuzz");
//     } else if (i % 3 == 0) {
//       console.log("Fizz");
//     } else if (i % 5 == 0) {
//       console.log("Buzz");
//     } else console.log(i);
//   }
// }
// fizzBuzz(65);

//for loops structure: INITIALIZE, CONDITION, ITERATE
/* switch statement: The switch expression is evaluated once.The value of the expression is compared with the values of each case. If there is a match, the associated block of code is executed. If there is no match, the default code block is executed.*/
function fizzBuzzSwitch(n) {
  for (let i = 1; i <= n; i++) {
    switch (true) {
      case i % 3 == 0 && i % 5 == 0:
        console.log("fizzBuzz");
        break;
      case i % 3 == 0:
        console.log("Fizz");
        break;
      case i % 5 == 0:
        console.log("Buzz");
        break;
      default:
        console.log(i);
        break;
    }
  }
}

fizzBuzzSwitch(65);
//---------------------------------------

todaysDate = new Date().getDay();
console.log(todaysDate);

function GatherDateSwitch(todaysDate) {
  switch (todaysDate) {
    case 0:
      date = "Sunday";
      console.log("Today is Sunday!");
      break;
    case 1:
      date = "Monday";
      console.log("Today is Monday!");
      break;
    case 2:
      date = "Tuesday";
      console.log("Today is Tuesday!");
      break;
    case 3:
      date = "Wednesday";
      console.log("Today is Wednesday!");
      break;
    case 4:
      date = "Thursday";
      console.log("Today is Thursday!");
      break;
    case 5:
      date = "Friday";
      console.log("Today is Friday!");
      break;
    case 6:
      date = "Saturday";
      console.log("Today is Saturday!");
      break;
  }
}

GatherDateSwitch(todaysDate);

// The Math.random() function is used to return a floating-point pseudo-random number between range [0,1) , 0 (inclusive) and 1 (exclusive).This random number can then be scaled according to the desired range.
let randomNumber = Math.random() * 10;
console.log(`Random Number Generated ${randomNumber}`);

// Q - fix the bugs
// function getMessageText() {
//   return $("message").text;
// }

// document.body.innerHTML = '<div id="message">The message</div>';
// console.log(getMessageText());

// Q - fix the bugs
// function average(a, b) {
//   return a + b / 2;
// }

// console.log(average(2, 1));

// module.exports = average;
