function diffArray(arr1, arr2) {
  var newArr = [];
  let newArr1 = arr1.filter(value=> (arr2.indexOf(value)==-1));
  let newArr2 = arr2.filter(value=> (arr1.indexOf(value)==-1 && newArr1.indexOf(value)==-1));
  newArr = newArr1.concat(newArr2);
  return newArr;
}
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
  console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));