// June 18, 2020

function rot13(str) {

let result = str.replace(/[A-Z.?!]/g, (match,idx) => str.charCodeAt(idx));
//console.log(result)
let arr = result.split(/(\d{2})/);
//console.log(arr)

let newArr = 
  arr
    .map(i => i == '' || i == ' ' || Number(i) == 33 || Number(i) == 46 || Number(i) == 63 ? i : 
                    Number(i) <= 77 ? Number(i) + 13 : Number (i) - 13)
    .filter(i => i != "")
    .map(i => (i != '' && i != ' ')? String.fromCharCode(i) : ' ')
    .join('')

  console.log(newArr);

  return newArr;
}

rot13("SERR PBQR PNZC")
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");