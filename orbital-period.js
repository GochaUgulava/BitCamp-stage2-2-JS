function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let period;
  let name;
  let avgAlt;
  let res = [];

  for (let i=0; i<arr.length; i++){
    name = arr[i]["name"];
    avgAlt = arr[i]["avgAlt"];
    period = Math.round(Math.sqrt(4 * Math.PI**2 * (avgAlt + earthRadius)**3 / GM));
    res.push({"name": name, "orbitalPeriod": period});
  }
  console.log(res);
  return res;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
 