var isValid = function (s) {
  let openingBrackets = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      openingBrackets.push(s[i]);
    }
    if (s[i] === ")" || s[i] === "]" || s[i] === "}") {
      let x;
      let opening = openingBrackets.pop();
      if (s[i] === ")") {
        x = "(";
      }
      if (s[i] === "]") {
        x = "[";
      }
      if (s[i] === "}") {
        iftrue = "{";
      }
      if (opening !== x) {
        return false;
      }
    }
  }
  if (openingBrackets.length !==0){
    return false
  }
  return true;
};

console.log(isValid("()"));
console.log(isValid("([]){}"));
console.log(isValid("()[]{}"));
console.log(isValid("(("));
