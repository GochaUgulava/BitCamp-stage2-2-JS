function fearNotLetter(str) {
  for (let i=0; i<str.length; i++){
    if(str.charCodeAt(i)!=str.charCodeAt(0)+i){
      return String.fromCharCode(str.charCodeAt(0)+i);
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));