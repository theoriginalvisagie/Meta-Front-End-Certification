// If Statement

const number = prompt("Enter a number: ");

// check if number is greater than 0
if (number > 0) {
  console.log("The number is positive");
}
// if number is not greater than 0
else {
  console.log("The number is either a negative number or 0");
}

console.log("The if...else statement is easy");

// Case Statements

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
}

/*=============================================*/

var age = 10;

if(age >= 65){
    console.log("You get your income from your pension");
}else if(age >= 18 && age < 65){
    console.log("Each month you get a salary");
}else if(age < 18){
    console.log("You get an allowance");
}else{
    console.log("The value of the age variable is not numerical " + age);
}

var day = "Sunday";

switch (day) {
    case "Sunday":
        console.log('Rain');
        break;
    case "Monday":
        console.log('Rain');
        break;
    case "Tuesday":
        console.log('Sunny');
        break;
    case "Wednesday":
        console.log('Cloudy');
        break;
    case "Thursday":
        console.log('Rain');
        break;
    case "Friday":
        console.log('Wind');
        break;
    case "Saturday":
        console.log('Clear');
    default:
        console.log('There is no such day')
};