const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


function titleCased(){ 

const capitleFirst = tutorials.map(newArray => {
  const arraySplit = newArray.split(' ');
  const arrayUpperCase = arraySplit.map(word => word[0].toUpperCase() + word.slice(1));
  return arrayUpperCase.join(' ');

});
return capitleFirst;

}


//return newArray.map(word => word[0].toUpperCase())










// function capitalizeFirst(titleCased) {
//   return capitalizeFirst.map((word) => {
//     return word[0].toUpperCase() + word.slice(1)}).join('');

// }
// console.log(capitalizeFirst);




// function titleCase(str) {
//   return str.toLowerCase().split(' ').map((word) => {
//     return word[0].toUpperCase() + word.slice(1)
//   }).join(' ')
// }

// titleCase("I'm a little tea pot");



// function titleCase(str) {
//   // Make all letters in the string lower case.
//   let lowerCaseString = str.toLowerCase()
//   //                    "i'm a little tea pot"

//   // Turn the lower case string into an array with each
//   // element of the array being a single word.
//   let splitString = lowerCaseString.split(' ')
//   //                ["i'm", 'a', 'little', 'teapot']

//   // We are manipulating each word in the array with the
//   // map function.
//   let titleCaseArray = splitString.map((word) => {
//   // Access the first letter of each word with bracket notation,
//   // then capitalize it. Then concatenate (add) the rest of the 
//   // word to the capitalized first letter by using slice.
//     return word[0].toUpperCase() + word.slice(1)
//   })
//   //                   ["I'm", 'A', 'Little', 'Teapot']

//   // Join the elements of the array back into a string, separating 
//   // each word with a space.
//   let titleCaseSentence = titleCaseArray.join(' ')
//   //                      "I'm A Little Teapot"

//   // Return the answer.
//   return titleCaseSentence

// }

// titleCase("I'm a little tea pot");

