function rangeOfNumbers(startNum, endNum) {

if (startNum === endNum) {
    return [startNum];
}

else {
    const toArray = rangeOfNumbers(startNum, endNum - 1);
    toArray.push(endNum);
    return toArray;
    }



};
