let firstMultiple=3;
let secondMultiple=5;
let thirdMultiple=(firstMultiple*secondMultiple);
let limit=+process.argv[2];
let sum=0;
const CalculateSum=function(multiple,sum){
  for(let index=multiple;index<limit;index+=multiple){
    sum+=index;
  }
  return sum;
}
const RemoveRepetition=function(multiple,sum){
  for(let index=multiple;index<limit;index+=multiple){
    sum-=index;
  }
  return sum;
}
exports.CalculateSum=CalculateSum;
firstMultipleSum=CalculateSum(firstMultiple,sum);
secondMultipleSum=CalculateSum(secondMultiple,firstMultipleSum);
removedRepetitions=RemoveRepetition(thirdMultiple,secondMultipleSum);
console.log(removedRepetitions)
