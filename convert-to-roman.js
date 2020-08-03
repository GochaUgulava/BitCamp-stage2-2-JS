//Convert the given number into a roman numeral.

function convertToRoman(num) {
  let digit;
  let argArr = [["I", "V", "X"], ["X", "L", "C"], ["C", "D", "M"], ["M"]];
  let result = [];
  let arg;
  let digitRoman;
  
  let arr = num.toString().split("");

  while (arr.length>0){
    digit = parseInt(arr.pop());
    arg = argArr.shift();
    if (digit === 0){continue;}
    convertDigit(digit, arg);
  }

  let numRoman = result.join("");
  console.log(numRoman);   
  return numRoman;
 
  function convertDigit(d, arg){
    if (arg.length === 1){
      digitRoman = arg[0].repeat(d);
    }else{
      switch (d){
        case 1:
          digitRoman = arg[0];
          break;
        case 2:
          digitRoman = arg[0] + arg[0];
          break;
        case 3:
          digitRoman = arg[0] + arg[0] + arg[0];
          break;
        case 4:
          digitRoman = arg[0] + arg[1];
          break;
        case 5:
          digitRoman = arg[1];
          break;
        case 6:
          digitRoman = arg[1] + arg[0];
          break;
        case 7:
          digitRoman = arg[1] + arg[0] + arg[0];
          break;
        case 8:
          digitRoman = arg[1] + arg[0] +  arg[0] + arg[0];
          break;
        case 9:
          digitRoman = arg[0] + arg[2];
          break;
      }
    } 

    result.unshift(digitRoman);
  }

}
 
 convertToRoman(36);
 convertToRoman(784);
 convertToRoman(100);
 convertToRoman(400);
 convertToRoman(3);
 convertToRoman(6323);
 convertToRoman(1000);
 convertToRoman(1987);
 