/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
View original problem here: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

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


// this function calculates exact change and outputs an array
function checkCashRegister(price, cash, cid) {

    // ===============================================================
    // helper array & helper func  
    // ===============================================================
        // this array keeps track of the name and exact value of each denomination. e.g. denominations.type, denominations.value
        let denominations = [
            {   type: "ONE HUNDRED", value:  100.00  },
            {   type: "TWENTY",      value:   20.00  },
            {   type: "TEN",         value:   10.00  },
            {   type: "FIVE",        value:    5.00  },
            {   type: "ONE",         value:    1.00  },
            {   type: "QUARTER",     value:    0.25  },
            {   type: "DIME",        value:    0.10  },
            {   type: "NICKEL",      value:    0.05  },
            {   type: "PENNY",       value:    0.01  },
        ];
        
        // this function rounds the sum of operands to the nearest hundreth
        function roundedSum(operand1, operand2 = 0) {
            let sum = Number((operand1 + operand2).toFixed(2));
             return sum;
         } 
    
    // ===============================================================
    // calculate total & itemized till components  
    // ===============================================================
        // total amount in register at any given moment (rounded)
        let registerSum = cid.reduce((cidTotal, i) => {
        cidTotal = roundedSum(cidTotal,i[1]);
        return cidTotal;
        }, 0); 
    
        // convert the cid denominations into an obj (so we don't have to deal with order and nested arrays)
        let exactRegister = 
            cid
            .reverse()
            .reduce((denomTotal, i) => {
             denomTotal[i[0]] = i[1];
             return denomTotal;
        }, {}); 
        
    // ===============================================================
    // calculate total & itemized exactChange components
    // ===============================================================
        
        // total amount due. Unary minus signs added to handle subtraction
        const changeDue = -roundedSum(-cash, price);
        // create a copy of changeDue that is not a CONST
        let changeDueVal = changeDue;
    
        // THE TRICKIEST PART
        // we need to create an array of exactChange. Use reduce method as a shorthand to manage this data structure for us.
        // TIP: reduce method & data structures: https://blog.khanacademy.org/lets-reduce-a-gentle-introduction-to-javascripts-reduce-method/
        let exactChange = denominations.reduce( (arr, i) => { 
            // We need to keep a tally of the total current changeDue accumulating at any given moment. 
            let changeDueTally = 0;

            // TRICKY: we also need to keep subtracting denominations.value from the exactRegister as long as... 
            // ...the current exactRegister value runs out (touches 0), AND...
            // ... the denom value in the exactRegister shouldn't be greater than changeDue
            while ( exactRegister[i.type] > 0 && changeDueVal >= i.value ) {

                // TRICKY: keep subtracting denominations.value from changeDueVal
                changeDueVal -= i.value;
                // TRICKY: keep subtracting denominations.value from exactRegister
                exactRegister[i.type] -= i.value;
                // TRICKY: tally all of the denominations.values with the changeDueTally
                changeDueTally += i.value;
                // round our result
                changeDueVal = roundedSum(changeDueVal);
            }
           
            // at the end of each iteration, the empty array will accumulate another denomination.type and running changeDueTally
            if (changeDueTally > 0) {
                arr.push([i.type, changeDueTally]);
              } 
              return arr;
            
        },[]);
    
    // ===============================================================
    // calculate status & return output
    // ===============================================================
        let cashRegisterOutput = { 
            status: "", 
            change: [] 
        };
    
        // checking my work: the total sum of the exactChange must equal the changeDue
        let ecSum = exactChange.reduce((cidTotal, i) => {
            cidTotal = roundedSum(cidTotal,i[1]);
            return cidTotal;
        }, 0); 
    
        // Calculate the statuses
        if (registerSum < changeDue) {
            cashRegisterOutput.status = "INSUFFICIENT_FUNDS";
            cashRegisterOutput.change = [];
        } else if (registerSum == changeDue) {
            cashRegisterOutput.status = "CLOSED";
            cashRegisterOutput.change = cid.reverse();
        // accounting for the test case that had greater registerSum but not exact change
        } else if (ecSum != changeDue) {
            cashRegisterOutput.status = "INSUFFICIENT_FUNDS";
            cashRegisterOutput.change = [];
        } else {
            cashRegisterOutput.status = "OPEN";
            cashRegisterOutput.change = exactChange;
        }
        console.log(cashRegisterOutput); // peek
    
        return cashRegisterOutput;
       
    }
    
    // test cases
    checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
    checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
    checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
    checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
    checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
    