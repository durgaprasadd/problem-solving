
let uptoTwenty="zero,one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen,twenty".split(",");
let uptoHundred="zero,ten,twenty,thirty,forty,fifty,sixty,seventy,eighty,ninety,hundred".split(",");
const generateWordsOfNumbers=function(uptoHundred,uptoTwenty){
  let words=[];
  for(let index=0;index<uptoTwenty.length;index++){
    words[index]=uptoTwenty[index];
  }
  for(let index=21;index<100;index++){
    if(index%10 == 0){
      words[index]=uptoHundred[index/10];
      index++;
    }
    words[index]=uptoHundred[Math.floor(index/10)]+uptoTwenty[index%10];
  }
  for(let index=100;index<1000;index++){
    if(index%100 == 0){
      words[index]=uptoTwenty[index/100]+uptoHundred[10];
      index++;
    }
    words[index]=words[index-(index%100)]+"and"+words[index%100];
  }
  return words;
}

const findSum = function(words){
  let sum=0;
  for(let index=1;index<1000;index++){
    sum += words[index].length;
  }
  sum += "onethousand".length;
  return sum;
}

let words=generateWordsOfNumbers(uptoHundred,uptoTwenty);
console.log(findSum(words));
