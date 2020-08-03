function spinalCase(str) {
  var s1 = str.replace(/([A-Z])/g, ' $1');
  var str = s1.split(/[\W\s_]/).filter(s=>s!="").join("-").toLowerCase();
  return str;
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));