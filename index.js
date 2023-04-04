function isPalindrome(word) {
  // Write your algorithm here
  const arrayOfLetters = word.split('');
  const reverseLetters = arrayOfLetters.reverse()
  const reverseString  = reverseLetters.join('')

  if (word == reverseString){

    return true

  } else {
    return false
  }
}

/* 
  Add your pseudocode here
   Function isPalindrome has to take a string as a parements. If the string is palindrom, the function should retur true. If not then the function should return false

*/

/*
  Add written explanation of your solution here
  This is a JavaScript code snippet that takes a string word, splits it into an 
  array of individual characters, reverses the order of the characters in the array, 
  joins the characters back together to form a new string, and then checks if the original 
  word and the newly created reverseString are the same. 
  If they are the same, it returns true, otherwise it returns false.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
