/*
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, 
ignoring punctuation, case, and spacing.
*/

function palindrome(str) {
  var re = /[a-z0-9]/;
  let arr = str.toLowerCase().split("").filter(a=>re.test(a));
  let res = true;
  for (let i=0; i<=Math.floor(arr.length/2); i++){
    res = res * (arr[i]===arr[arr.length-1-i]);
  }
  console.log(Boolean(res));
  return Boolean(res);
}



palindrome("eye");
palindrome("_eye");
palindrome("eys");
palindrome("A man, a plan, a canal. Panama");
palindrome("My age is 0, 0 si ega ym.");
palindrome("0_0 (: /-\ :) 0-0");