// 	June 17, 2020

function convertToRoman(num) {

let number = num.toString(); 
    number = number.split(''); 

for (let i = 0; number.length < 4; i++) number.unshift('');

let romanNumArr = {
  3: ['','I','II','III','IV','V','VI','VII','VIII','IX'],
  2: ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
  1: ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],
  0: ['','M','MM','MMM'],
  }

let romanArr = [];

return romanArr =
  number
  .map((element,idx) => element * (Math.pow(10,(3-idx))))
  .map((element,idx) => romanNumArr[idx][element/(Math.pow(10,(3-idx)))])
  .join('');
}
convertToRoman(3999);