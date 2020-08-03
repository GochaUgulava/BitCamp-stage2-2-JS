/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
*/

function rot13(str) {
  let result = [];
  let sym;
  let newSym;

  let arr = str.toUpperCase().split("");
  
  for (let i=0; i<arr.length; i++){
    sym = arr[i].charCodeAt(0);
    if (sym > 64 && sym < 92){
      newSym = String.fromCharCode((sym+13)>90 ? sym-13 : sym+13);
    }else{
      newSym = arr[i];
    }
    result.push(newSym);
  }
  str = result.join("");
  console.log(str);
  return str;
}

rot13("SERR PBQR PNZC");
