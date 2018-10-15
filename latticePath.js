let count=+process.argv[2];
let result=0;
let number=1;
let finalNumber=Math.pow((count+1),2);
let array = [];
for(let index=0;index<=count;index++){
  array[index]=[];
  for(let pos=0;pos<=count;pos++){
    array[index][pos]=number;
    number++;
  }
}
const checkTheValue = function(array,index,digit){
  if(array[index][digit]== finalNumber){
    result++;
  }
  else{
    traceThePosition(array,index,digit);
  }
}


const traceThePosition = function(array,index,digit){
    if(digit+1<=count&&array[index][digit+1]> 0){
      checkTheValue(array,index,digit+1)
    }
    if(index+1<=count&&array[index+1][digit]> 0){
      checkTheValue(array,index+1,digit)
    }
  }
const main = function(array){
  traceThePosition(array,0,0);
}
main(array)
console.log(result);
