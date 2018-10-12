previousEvenNumber=0;
currentEvenNumber=2;
const CalculateSum=function(currentValue,previousValue,limit){
  let sum=2
  let nextTerm=((currentValue*4)+previousValue);
  while(nextTerm<limit){
    sum+=nextTerm;
    previousValue=currentValue;
    currentValue=nextTerm;
    nextTerm=((currentValue*4)+previousValue);
  }
  return sum;
}
exports.SumOfEvenFibonacci=CalculateSum;
console.log(CalculateSum(currentEvenNumber,previousEvenNumber,4000000))
