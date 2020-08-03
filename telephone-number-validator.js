/* 
Return true if the passed string looks like a valid US phone number.
The user may fill out the form field any way they choose as long as 
it has the format of a valid US number. 
The area code is required. If the country code is provided, 
you must confirm that the country code is 1. Return true if 
the string is a valid US phone number; otherwise return false.
*/

function telephoneCheck(str) {
  let isTel2 = false;

  let re = /^1?[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{4}$/;

  let isTel = re.test(str);
  if ((str.indexOf("(")!=-1 && str.indexOf(")")!=-1)){
    isTel2 = true;
  }
  if ((str.indexOf("(")==-1 && str.indexOf(")")==-1)){
    isTel2 = true;
  }
  isTel = Boolean(isTel * isTel2);

  console.log(isTel);
  return isTel;
}

//true
telephoneCheck("555-555-5555");
telephoneCheck("1 555-555-5555");
telephoneCheck("1 (555) 555-5555");    
telephoneCheck("5555555555");
telephoneCheck("(555)555-5555");
telephoneCheck("1(555)555-5555");
telephoneCheck("1 555 555 5555");
telephoneCheck("1 456 789 4444");

console.log("\n");
//false
telephoneCheck("555-5555");
telephoneCheck("5555555");
telephoneCheck("1 555)555-5555");   
telephoneCheck("123**&!!asdf#");
telephoneCheck("55555555");
telephoneCheck("(6054756961)");
telephoneCheck("2 (757) 622-7382");
telephoneCheck("0 (757) 622-7382");
telephoneCheck("-1 (757) 622-7382");
telephoneCheck("2 757 622-7382");
telephoneCheck("10 (757) 622-7382");
telephoneCheck("27576227382");
telephoneCheck("(275)76227382");
telephoneCheck("2(757)6227382");
telephoneCheck("2(757)622-7382");
telephoneCheck("555)-555-5555");    
telephoneCheck("(555-555-5555");   
telephoneCheck("(555)5(55?)-5555");
