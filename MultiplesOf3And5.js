let firstMultiple=3;
let secondMultiple=5;
let limit=+process.argv[2]-1;
let sum=0;
let firstLimit=Math.floor(limit/firstMultiple);
let secondLimit=Math.floor(limit/secondMultiple);
for(let index=1;index<=firstLimit;index++){
  sum+=(firstMultiple*index);
}
for(let index=1;index<=secondLimit;index++){
  sum+=(secondMultiple*index);
}
console.log(sum);
