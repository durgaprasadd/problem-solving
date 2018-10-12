const CalculateLargePrime=function(number){
  let LargestPrime=0;
  let primeFactor=3
  for(;primeFactor<=number;primeFactor+=2){
    if(number%primeFactor==0){
      if(primeFactor>LargestPrime){
        LargestPrime=primeFactor
      }
      number=(number/primeFactor);
      primeFactor=3;
    }
  }
  return LargestPrime;
}
console.log(CalculateLargePrime(600851475143));
