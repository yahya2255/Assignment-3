//Assignment :3//
//Question :1///
let age = 25;
let ageAsString = age.toString();
console.log(ageAsString);

//Question :2//
let number =prompt("Enter a number:")
if(number % 2== 0){
    alert(number +"is even.")
}else{
    alert(number +"is odd.")
}

//Question:3//
let temperature =72;

let celsius = (temeprature -32)*(5/9);
console.log(celsius);

//Question 4://
let name = prompt("Please enter your name:");
let Age = prompt("Please enter your age:");

if (Age >= 18) {
  console.log(`Welcome ${name}, you are an adult`);
} else {
  console.log(`Sorry ${name}, you are not yet an adult`);
}

//Question :5//
let isRaining = true;
if (isRaining) {
  console.log("Bring an umbrella");
} else {
  console.log("Leave the umbrella at home");
}
