/* Mark and John BMI Challenge. Implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and Height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return
it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI.
Don't forget they might have the same BMI.
Remember: BMI = mass / heightˆ2 = mass / (height * height). (mass in kg and height in meter).
*/

var mark = {
  name: 'Mark Cage',  // key: value
  mass: '78',
  height: '1.69',
  calcBMI: function(){
    this.bmi = this.mass / Math.pow(this.height,2);
  }
}

mark.calcBMI();
console.log(mark);

var john = {
  name: 'John Smith',  // key: value
  mass: '92',
  height: '1.95',
  calcBMI: function(){
    this.bmi = this.mass / Math.pow(this.height,2);
  }
}

john.calcBMI();
console.log(john);

if(mark.bmi > john.bmi){
  console.log(mark.name + ' has a higher BMI');
}
else  if (mark.bmi < john.bmi){
  console.log(john.name + ' has a higher BMI');
} else {
  console.log(mark.name + ' and ' + john.name + ' has the same BMI');
}
