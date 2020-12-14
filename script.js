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

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else console.log(i);
  };
}
fizzBuzz(65);

// Q - fix the bugs
function getMessageText() {
    return $('message').text;
  }
  
  document.body.innerHTML = '<div id="message">The message</div>';
  console.log(getMessageText());


  // Q - fix the bugs
  function average(a, b) {
    return a + b / 2;
  }
  
  console.log(average(2, 1));
  
  module.exports = average;


