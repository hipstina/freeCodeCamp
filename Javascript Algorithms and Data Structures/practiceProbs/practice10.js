"use strict";

//MINIMUM Fn

function minFunc(arg1,arg2) {
    if (arg1 > arg2) {
        return arg2;
    } else  if (arg1 === arg2) {
        return "These numbers are EQUAL";
    }
    else return arg1;
}
console.log(minFunc(5,10));
console.log(minFunc(15,1));
console.log(minFunc(4,4));