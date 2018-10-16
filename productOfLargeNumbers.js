const MultiplyDigits=function(firstNumber,secondNumber){
  let product=[];
  for(let digit=firstNumber.length-1;digit>=0;digit--){
    let carry=0;
    product[digit]="";
    for(let pos=secondNumber.length-1;pos>=0;pos--){
      product[digit]=""+((+firstNumber[digit]*+secondNumber[pos]+carry)%10)+product[digit];
      carry=Math.floor((+firstNumber[digit]*+secondNumber[pos]+carry)/10);
    }
    product[digit]=""+carry+product[digit];
  }
  return product;
}
const CalculateSum=function(product){
  let zeroes="0"
  let result="";
  let sum=0;
  for(let index=product.length-2;index>=0;index--){
    product[index]=product[index]+zeroes;
    zeroes="0"+zeroes;
  }
  for(let digit=1;digit<=product[0].length;digit++){
    for(let index=0;index<product.length;index++){
      if(digit<=product[index].length){
        sum+=+product[index][product[index].length-digit];
      }
    }
    result=""+sum%10+result;
    sum=Math.floor(sum/10);
  }
  return result;
}
let product=(MultiplyDigits("100","100"));
console.log(CalculateSum(product));
