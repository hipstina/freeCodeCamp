// June 18, 2020

function telephoneCheck(str) {

  let reg = str.match(/^1?[\s]?\d{3}[\s]*[-]?\d{3}[-]?(\s)*\d{4}$|^1?[\s]?\(\d{3}\)[\s]*[-]?\d{3}[-]?(\s)*\d{4}$|/g);

  //console.log(reg);

 let validNum = reg.filter(num => Boolean(num) ? true : false)
 console.log(validNum);
  
  if (validNum.length > 0) return true;
  else return false;
}

telephoneCheck("5555555555");
telephoneCheck("555-555-5555");
telephoneCheck("(555)555-5555");
telephoneCheck("1 (555) 555-5555");
telephoneCheck("1 555)555-5555"); //false
telephoneCheck("555)555-5555"); //false
telephoneCheck("(555-555-5555"); //false