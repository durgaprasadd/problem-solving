const generatePythagorean = function(range,limit){
  let result=0;
  for(let sum=range;sum<limit;sum+=2){
    let count=0;
    for(let a=1;a<sum/3;a++){
      let d=sum-a;
      let b=((d*d)-(a*a))/(2*d);
      if(Math.ceil(b)==b && b>a){
        count++;
      }
      if(count>1){
        break;
      }
    }
    if(count==1){
      result++;
    }
  }
  console.log(result);
}
generatePythagorean(+process.argv[2],+process.argv[3]);
