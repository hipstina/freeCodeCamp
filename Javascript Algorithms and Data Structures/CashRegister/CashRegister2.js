/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
Design a cash register drawer function checkCashRegister() that:
+ accepts purchase price as the first argument (price), 
+ payment as the second argument (cash), and 
+ cash-in-drawer (cid) as the third argument.

+ cid is a 2D array listing available currency.

+ The checkCashRegister() function should always return an object with a status key and a change key.

+ if cash-in-drawer is less than the change due, or if you cannot return the exact change, return {status: "INSUFFICIENT_FUNDS", change: []} 

+ if the value for the key is equal to the change due, then return {status: "CLOSED", change: [...]} with cash-in-drawer as change 

+ else, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key. 
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// This problem is easier when you know the value of each bill or coin you are working with
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

// this function checks how much money is in the register, calculates change due, and returns a string status & exact change array
function checkCashRegister(price, cash, cid) {

    //The checkCashRegister() function should always return an object with a `status` key and a `change` key
    let result = { status: "", change: [] };

     // calculate the total amount of available funds in the register and assign it to `availFunds` variable
    let availFunds = cid.reduce((a, b) => a + b[1], 0); 

    // calculate change due and assign it to `changeDue` variable
    let changeDue = cash - price;
   

    // calculate exact change and assign it to `exactChange` array
    // To calculate exactChange: while each denom is greater than both 0 and changeDue, iterate through each denomination in the cid and subtract from each value 

    let exactChange = [];
    for (let i = cid.length - 1; i >= 0; i--) {
        
        let amountPerDenom = 0;

        while ( cid[i][1] > 0 && moneyVals[i] <= changeDue ) {
            cid[i][1] -= moneyVals[i];
            changeDue -= moneyVals[i];
            amountPerDenom += moneyVals[i];
        }
        // changeDue = Math.round(changeDue * 100) / 100;
        amountPerDenom =  Math.round(amountPerDenom*10) / 10;

        if (amountPerDenom > 0) {
            exactChange.push( cid[i][0], amountPerDenom );
        }
        console.log(exactChange);
        return exactChange;
    }       
        
    console.log(exactChange);

   
    // if availFunds is less than the changeDue, return `insufficient funds` string & empty exactChange array
    if (changeDue > availFunds) {
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
        console.log(result);
        return result;
    }

    // if availFunds is equal to the changeDue, return `closed` string with cid as exactChange
if (changeDue == availFunds) {
        result.status = "CLOSED";
        result.change = cid;
        console.log(result);
        return result;
    }

    // if availFunds is greater than the changeDue, return `insufficient funds` string & exactChange array
    
        result.status = "OPEN";
        result.change = exactChange;
        console.log(result);
        return result;

}


// Test cases
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

