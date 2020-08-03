function pairElement(str) {
  let result = [];
  for (let i=0; i<str.length; i++){
    let chain = [];
    let first = str.charAt(i);
    let second;
    first=="G" ? second="C" : first=="C" ? second="G" : first=="A" ? second="T": second="A";

    chain.push(first);
    chain.push(second);

    result.push(chain);  
  }

  return result;
}

console.log(pairElement("GCG"));
