// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  let result = [];
  make(arr);
   
  if(!result.every(check)){
     arr=result;
     result = [];
     make(arr);
  }

  return result;

  function make(arr){
    if (arr.length==undefined){
      result.push(arr);
      return
    }
    if (arr.length==1){
      result = result.concat(arr);
      return
    }
    for (let i=0; i<arr.length; i++){
       
      make(arr[i]);
  }
  }
   
  function check(a){
    if (a.length == undefined)return true;
    else return false;
  }
    
   
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
