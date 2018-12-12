const findLastTenDigits = function(limit) {
  let sum = 0;
  let range = Math.pow(10, 10);
  for (let i = 1; i <= limit; i++) {
    let value = 1;
    for (let j = 1; j <= i; j++) {
      let product = value * i;
      value = product % range;
    }
    sum += value;
  }
  return sum % range;
};

console.log(findLastTenDigits(+process.argv[2]));
