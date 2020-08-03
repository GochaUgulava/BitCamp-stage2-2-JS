function myReplace(str, before, after) {
  if (before.charAt(0)==before.charAt(0).toUpperCase()){
    after =  after.charAt(0).toUpperCase() +  after.slice(1);
  }
  str =  str.split(/\s/);
  str = str.map(function(a){if(a==before){a=after;}return a;}).join(" ");
  return str;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("His name is Tom", "Tom", "john"));
