// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We declare a variable called name and set it's value to 'Dane' (a string value).
// We check if name is equal to 'Mary' (exact match only), we console.log "Hi Mary!".
// Since name is not equal to Mary, we console.log "How do you do?".

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//We declare a variable called secret, but we do not set a value.
//Then, we declare a variable called code and set it's value to 123 (a number value).
//We check if code is equal to (with exact match only) 123, then secret will be set to 'super' and code is then set to 123 * 2 (or, 246).
//We also check if code is greater than 250, if so then secret will be set to 'duper' and the  value for code would remain 123.
//Since the value of code is equal to 246, and it's less than 250, the value of secret would be set to 'super'.
//We console log secret, which should produce its value (super) in the console.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//We declare a variable called isStudent and set it's value to true (a boolean value).
//We declare a variable called age and set it's value to 34.
//We declare a variable called zip and set its value to 55407.
//We check if iStudent is equal to (with exact match only) true, AND zip code is greater than 80000. The console will log 'You're a student on the West Coast!'.
//Since iStudent is equal to true, but zip code is less than 80000 (zip code is set to 55407)...
//We check if iStudent is equal to false, OR age is less than 30. Since iStudent is not equal to false or age is not less than 30...
//We check if istudent is equal true. Since iStudent is set to true and is equal to true...
//We console log "Welcome to Prime".
//The last else statement is not ran, since the preceding condition (set as true) was executed.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//FIX colorOne is set to 'red' and should be set to 'blue'.
//FIX let colorOne = 'blue';
let colorOne = 'red';
//FIX colorTwo is set to 'blue' and should be set to 'red'.
//FIX let colorTwo = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
//FIX Only colorOne is set to purple, both colorOne and colorTwo should be set to purple.
//FIX colorOne = colorTwo = 'purple'
  colorOne = 'purple';

}

*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
//FIX this compound conditional says EITHER of the conditions can be true ("or"). It should be that BOTH sides of the condition must be true (using the "and" logocal operator; &&).
//FIX if (temp > 39 && time >= 4) {
  console.log('throw away the food!');
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;

//FIX the if statement checks if minAge is less than or equal to age. It should check if age is greater than or equal to minAge.
//FIX if(minAge => age) {
if(minAge <= age) {
//FIX if age is greater than or equal to minAge, It should console log "enter" not "no entry".
//FIX console.log('enter');
  console.log('no entry');
//FIX if age is less than minAge, It should console log "no entery" not "enter".
//FIX } else {
  console.log('no entery');
} else {
  console.log('enter');
}
*/
