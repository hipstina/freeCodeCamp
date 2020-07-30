// June 16, 2020

function palindrome(str) {
str = str.toLowerCase();
let strToArr = str.match(/[A-Z0-9]/gi);  console.log(strToArr);
let strToArrCopy = [].concat(strToArr);
let reversedArr = strToArrCopy.reverse(); console.log(reversedArr);

while (reversedArr.join('') == strToArr.join('')) {
  return true;
} return false; 
}



// palindrome("eye");
// palindrome("_eye");
// palindrome("race car");
// palindrome("not a palindrome");
// palindrome("A man, a plan, a canal. Panama");
// palindrome("never odd or even");
// palindrome("nope");
palindrome("almostomla");
// palindrome("My age is 0, 0 si ega ym.");
// palindrome("1 eye for of 1 eye.");
// palindrome("0_0 (: /-\ :) 0-0");
// palindrome("five|\_/|four");