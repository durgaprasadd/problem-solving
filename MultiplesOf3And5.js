let firstMultiple=3;
let secondMultiple=5;
let thirdMultiple=(firstMultiple*secondMultiple);
let limit=+process.argv[2]-1;
let sum=0;
const CalculateSum=function(multiple,sum){
  let range=Math.floor(limit/multiple);
  sum+=multiple*(range/2)*(range+1);
  return sum;
}
const RemoveRepetition=function(multiple,sum){
  let range=Math.floor(limit/multiple);
  sum-=multiple*(range/2)*(range+1);
  return sum;
}
exports.CalculateSum=CalculateSum;
firstMultipleSum=CalculateSum(firstMultiple,sum);
secondMultipleSum=CalculateSum(secondMultiple,firstMultipleSum);
removedRepetitions=RemoveRepetition(thirdMultiple,secondMultipleSum);
console.log(removedRepetitions)
