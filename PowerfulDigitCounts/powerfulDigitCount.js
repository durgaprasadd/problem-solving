/*
How many n-digit positive integers exist which are also an nth power?
*/

const countNthPowerNDigitNumbers = function(limit) {
  let count = 0;
  for (let i = 1; i < limit; i++) {
    for (let j = 1; j < limit; j++) {
      let number = "" + Math.pow(i, j);
      if (number.length == j) {
        count++;
      }
      if (number.length > j) {
        break;
      }
    }
  }
  return count;
};

console.log(countNthPowerNDigitNumbers(100));
