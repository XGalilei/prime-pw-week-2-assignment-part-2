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
t
*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable titled name, and set it to the string value 'Dane'.
// We check if the value of name is equal to 'Mary', using the strict equality operator ===.
// Since the value of name is 'Dane' instead of 'Mary' we output 'How do you do?'
// to the console.

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
// We declare the variables secret and code. We initialize code as the number 123.
// We check if the value of code equals 123. Since it does, we set the value of
// secret as 'super', and double the value of code. code is now 246.
// We check if the value of code exceeds 250. 246 is less than 250, so we do nothing.
// We ouput 'super' to the console.

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
// We initialize three variables: isStudent as the boolean true, age as the number 34, and zip as the number 55407.
// We first check if isStudent is true AND zip exceeds 80000. Since the latter condition is false, we move on to the first else if
// We then check if isStudent is false and age is less than 30. Neither are true, so we move onto the second else if
// We now check if isStudent is true. That is indeed the case, so we output
// 'Welcome to Prime!' to the console.

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

// FIX - only colorOne is set to 'purple'; colorTwo is unchanged
// Add a line that changes colorTwo to 'purple'
// Alternatively, declare a colorThree variable before the if statement and
// initialize it as 'purple' in place of changing colorOne.

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to 4
// -- they are so we console.log 'throw away the food!'

// FIX - incorrect operator: || is the OR operator, not the AND operator
// Switch || to &&
// I also wonder if it would make sense to declare time using let or var rather
// than const, since in a real-world equivalent, time is going to change just as
// much, if not more than, the temperature

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

// FIX - the condition gives us the opposite of the desired results: values
// greater than or equal to minAge will console.log 'no entry'.
// Option 1: Change the operator from <= to >
// Option 2: Flip the console.log messages around

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
