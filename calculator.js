// Function to divide two numbers by Avi and shravani

function divide(a, b) {
   if (b === 0) {
   return "Error: Division by zero";
   }
   return a / b;
}

const a = 10;
const b = 5;

console.log(`Division: ${a} / ${b} = ${divide(a, b)}`);
