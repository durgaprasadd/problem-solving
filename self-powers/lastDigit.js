let cycles = {
  1: [1],
  2: [2, 4, 8, 6],
  3: [3, 9, 7, 1],
  4: [4, 6],
  5: [5],
  6: [6],
  7: [7, 9, 3, 1],
  8: [8, 4, 2, 6],
  9: [9, 1],
  0: [0]
};

const findLastDigit = function([number, value]) {
  let cycle = cycles[number[number.length - 1]];
  value = +value.slice(-2);
  cycle.unshift(cycle.pop());
  return cycle[value % cycle.length];
};

console.log(findLastDigit(process.argv.slice(2)));
