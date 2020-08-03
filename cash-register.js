/* 
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
cid is a 2D array listing available currency.
The checkCashRegister() function should always return an object with a status key and a change key.
Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, 
or if you cannot return the exact change.
Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change
if it is equal to the change due.
Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, 
sorted in highest to lowest order, as the value of the change key.
*/

function checkCashRegister(price, cash, cid) {
  
  let cidSum = cid.reduce(function(sum, a) {
    return sum + a[1];
  }, 0);

  let valueMoney = {"PENNY": 1, "NICKEL": 5, "DIME": 10, "QUARTER": 25, "ONE": 100, "FIVE": 500, "TEN": 1000, "TWENTY": 2000, "ONE HUNDRED": 10000};
  let check = {"PENNY": 0, "NICKEL": 0, "DIME": 0, "QUARTER": 0, "ONE": 0, "FIVE": 0, "TEN": 0, "TWENTY": 0, "ONE HUNDRED": 0};
  let M;
  let status = "OPEN";
  let checkLast = [];
  let change = (cash-price)*100;

  if (price>cash){
    status = "INSUFFICIENT_FUNDS";
  }else{
    makeCheck();
  }

  if ((cash-price)==cidSum && status==="OPEN"){
    status = "CLOSED";
  }

  makeCheckLast();

  if(status=="OPEN"){
    checkLast.reverse();
  }
  
  let result = {"status": status, "change": checkLast};

  console.log(result);
  
  return result;


  function makeCheck(){
    while (change>0){
      if (cid.length==0 && change>0){
        status = "INSUFFICIENT_FUNDS";
        return;
      }
      M = cid.pop();
      let vM0 = Number(valueMoney[M[0]]);
      let M1 = Number(M[1]*100); 
      while (change>=vM0){
        if(M1>=vM0){
          change = change - vM0;
          M1 = M1 - vM0;
          check[M[0]] = check[M[0]] + vM0;
           
        }else{
          break; 
        }
      }
    }
    return;
  }


  function makeCheckLast(){
    if (status == "INSUFFICIENT_FUNDS"){
      checkLast = [];
      return;
    }
    for (let key in check){
      let pair = [];
      if (check[key]===0 && status!="CLOSED"){
        continue;
      }
      pair.push(key);
      pair.push(check[key]/100.00);
      checkLast.push(pair);
    }
  }


}



checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(22.33, 100, [["PENNY", 0], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(9, 10, [["PENNY", 1], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

