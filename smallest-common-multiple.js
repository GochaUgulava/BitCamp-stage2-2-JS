// Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
//as well as by all sequential numbers in the range between these parameters.

"use strict";
function smallestCommons(arr) {
    let arr1 = [];
    for(let i=Math.min(...arr); i<=Math.max(...arr); i++){
      arr1.push(i);   
    }

    let lcm = arr1[0];
    for (let i = 1; i < arr1.length; i++) {
      lcm = (lcm * arr1[i]) / gcd(lcm, arr1[i]);
    }
    return lcm;

  function gcd(x, y) {
    if (y === 0) return x;
    else return gcd(y, x % y);
  }
}

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([23, 18]));