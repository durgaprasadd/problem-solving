// non mersenne prime number  2,357,207 digits: 28433×2^7830457+1.
// last ten-digits;

const main = function(digits){
    const initialNumber = 28433;
    let product = initialNumber;
    const quotient = Math.pow(10,digits);
    for(let i=1;i<=7830457;i++){
        product *= 2;
        product %= quotient;
    }
    return product+1;
}

console.log(main(10))