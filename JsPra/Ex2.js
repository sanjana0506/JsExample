/*
2)
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
*/
const massMark1 = 78;
const heightMark1 = 1.69;
const massJohn1 = 92;
const heightJohn1 = 1.95;
const BMIMark1 = massMark1 / heightMark1 ** 2;
const BMIJohn1 = massJohn1 / (heightJohn1 * heightJohn1);
const markHigherBMI1 = BMIMark1 > BMIJohn1;
 
console.log(BMIMark1, BMIJohn1, markHigherBMI1);
if (BMIMark1 > BMIJohn1) {
    console.log(`Mark's BMI (${BMIMark1}) is higher than John's (${BMIJohn1})`);
  } else {
    console.log(`John's BMI (${BMIJohn1}) is higher than Marks's (${BMIMark1})`);
  }

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
  } else {
    console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`);
  }
