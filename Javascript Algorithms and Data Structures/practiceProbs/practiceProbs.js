
"use strict";

// fibonacci


function sumFibs(num) {
  let arr = [1,1]; //console.log(arr[0])

  let sum = 0;
    for(let i = 0; ; i++) {
      if (num > 2) {
      sum = arr[i] + arr[i+1];
        if (sum > num) {
        break;
        } else arr.push(sum);
      }
    } 

let oddsOnly = [];

oddsOnly = 
  arr
  .filter(element => element % 2 != 0)
  .reduce((count,element) => count += element)

  console.log(oddsOnly);
  return oddsOnly;
}

sumFibs(75024);

sumFibs(75025);

sumFibs(1);

sumFibs(1000);// 1785.

sumFibs(4000000);// should return 4613732.

sumFibs(4);// should return 5.

sumFibs(75024);// should return 60696.

sumFibs(75025);// should return 135721.

/////////////////////////

function sumPrimes(n) {
  let primeOnly = [];
  let arr = [];
  let max = n;
  while (arr.length < max) {
    arr.push(n);
    n-=1;
    //console.log(arr);
  }

  for(let i = 0; i < arr.length; i++) {
  isPrime(arr[i]);  
  }
    function isPrime (num) {
        if (num < 2) return false;
        let q = Math.floor(Math.sqrt(num));
        for (let i = 2; i <= q; i++) {
            if (num % i == 0) {
                return false;
            }
        }
      primeOnly.push(num);
      return primeOnly;
      } 

 let sumOfPrimes = primeOnly.reduce((count, element) => count += element);
  
//console.log(primeOnly)
//console.log(sumOfPrimes)

return sumOfPrimes;
}


///////////////////////////////

function binaryAgent(str) {
  const binToDec ={
    0: 128,
    1: 64,
    2: 32,
    3: 16,
    4: 8,
    5: 4,
    6: 2,
    7: 1
  }
  let sentence = "";

  let arr = str.split(" "); //console.log(arr)
  let chunk = arr; //console.log(chunk)
  let newArr = [];
  let max = arr.length;

  for(let i = 0; i < max; i++) {
    let chunkArr = 
      chunk
        .shift()
        .split("")
        .map((code,idx) => Boolean(Number(code))? binToDec[idx] : Number(code))
        .reduce((count,num) => count += num);
        
    newArr.push(chunkArr);
    sentence = newArr.map(decimal => String.fromCharCode(decimal)); 
    sentence = sentence.join(''); 
   } 
  console.log(sentence)
  return sentence;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")