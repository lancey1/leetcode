const plusOne = function(digits) {
  let sumOfDigits = BigInt(digits.join('')) + BigInt(1);
  let output = [];
  let x = sumOfDigits.toString();
  for (let i = 0; i < x.length; i++){
      output.push(Number(x[i]));
  }
  return output;
};