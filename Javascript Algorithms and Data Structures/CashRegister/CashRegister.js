let moneyVals = [
    {name: "HUNDRED", value: 100},
    {name: "TWENTY", value: 20},
    {name: "TEN", value: 10},
    {name: "FIVE", value: 5},
    {name: "ONE", value: 1},
    {name: "QUARTER", value: 0.25},
    {name: "DIME", value: 0.10},
    {name: "NICKEL", value: 0.05},
    {name: "PENNY", value: 0.01},
]

function checkCashRegister(price, cash, cid) {
 
  let regSum = (cid.reduce((count,increment) => count += increment[1], 0)).toFixed(2); //console.log(regSum)
  
  let change = function() {return (cash - price)};

  let status = function() {
     return regSum > change() ? "OPEN" :
     regSum == change() ? "CLOSED" : "INSUFFICIENT_FUNDS"; 
      }; 


    let changeDueArr = [];

    
    for(let a = cid.length - 1; a >= 0; a--){
    //console.log(cid[a]);


    for(let i = cid[a]; i < cid.length; i++) {
      //console.log(cid[i]);
    }
    for(let a = 1; a >= 0; a--){
    let sum = cid[a].filter((count,element) => {
        if (typeof element == 'number') count = count + element;
        console.log(element);        
    },0)
    console.log(sum);
}
 
    //let count = change();
    //console.log(count);
    //console.log(if (cid[i] += 1) {count})
  }
    
  let obj = {
    status: status(), 
    change: change()
    };

  //return console.log(obj);
}

//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); //status: OPEN, change: [["QUARTER", 0.5]]

 checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); //status: OPEN, change: [...]

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //status: INSUFFICIENT_FUNDS, change: []

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //status: INSUFFICIENT_FUNDS, change: []

// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //CLOSED cid

  // cid[0].push(0.01)
  // cid[1].push(0.05)
  // cid[2].push(0.1)
  // cid[3].push(0.25)
  // cid[4].push(1)
  // cid[5].push(5)
  // cid[6].push(10)
  // cid[7].push(20)
  // cid[8].push(100)
  // console.log(cid)

  //   //   //   //   //   //   // 
  // Old Cash Register attempt  // 
  //   //   //   //   //   //   // 

  function checkCashRegister(price, cash, cid) {
 
    let regSum = (cid.reduce((count,increment) => count += increment[1], 0)).toFixed(2); //console.log(regSum)
    
    let change = function() {return (cash - price)};
  
    let status = function() {
       return regSum > change() ? "OPEN" :
       regSum == change() ? "CLOSED" : "INSUFFICIENT_FUNDS"; 
        }; 
  
    // cid[0].push(0.01)
    // cid[1].push(0.05)
    // cid[2].push(0.1)
    // cid[3].push(0.25)
    // cid[4].push(1)
    // cid[5].push(5)
    // cid[6].push(10)
    // cid[7].push(20)
    // cid[8].push(100)
    // console.log(cid)
  
    for(let a = cid.length - 1; a >= 0; a--){
      //console.log(cid[a]);
  
  
      for(let i = cid[a]; i < cid.length; i++) {
        //console.log(cid[i]);
      }
   
      //let count = change();
      //console.log(count);
      //console.log(if (cid[i] += 1) {count})
    }
      
    let obj = {
      status: status(), 
      change: change()
      };
  
    //return console.log(obj);
  }
  
  //checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); //status: OPEN, change: [["QUARTER", 0.5]]
  
   checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); //status: OPEN, change: [...]
  
  // checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //status: INSUFFICIENT_FUNDS, change: []
  
  // checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //status: INSUFFICIENT_FUNDS, change: []
  
  // checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //CLOSED cid


 //   //   //   //   //   //   // 
// Old Cash Register attempt  // 
//   //   //   //   //   //   // 

  let denom = [
    { name: "ONE HUNDRED", val: 100.0 },
    { name: "TWENTY", val: 20.0 },
    { name: "TEN", val: 10.0 },
    { name: "FIVE", val: 5.0 },
    { name: "ONE", val: 1.0 },
    { name: "QUARTER", val: 0.25 },
    { name: "DIME", val: 0.1 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 }
  ];
  
  function checkCashRegister(price, cash, cid) {
    let output = { status: null, change: [] };
    let change = cash - price;
  
    let register = cid.reduce(
      function(acc, curr) {
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
      },
      { total: 0 }
    );
  
    if (register.total === change) {
      output.status = "CLOSED";
      output.change = cid;
      return output;
    }
  
    if (register.total < change) {
      output.status = "INSUFFICIENT_FUNDS";
      return output;
    }
  
    let change_arr = denom.reduce(function(acc, curr) {
      let value = 0;
    
      while (register[curr.name] > 0 && change >= curr.val) {
        change -= curr.val;
        register[curr.name] -= curr.val;
        value += curr.val;
  
        change = Math.round(change * 100) / 100;
      }
      if (value > 0) {
        acc.push([curr.name, value]);
      }
      return acc; 
    }, []); 
  
    
    if (change_arr.length < 1 || change > 0) {
      output.status = "INSUFFICIENT_FUNDS";
      return output;
    }
  
    
    output.status = "OPEN";
    output.change = change_arr;
    return output;
  }
  
  // Test cases
  checkCashRegister(19.5, 20.0, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90.0],
    ["FIVE", 55.0],
    ["TEN", 20.0],
    ["TWENTY", 60.0],
    ["ONE HUNDRED", 100.0]
  ]);