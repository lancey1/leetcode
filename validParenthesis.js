var isValid = function (s) {
  let openingBrackets = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      openingBrackets.push(s[i]);
    }
    if (s[i] === ")" || s[i] === "]" || s[i] === "}") {
      let iftrue;
      let opening = openingBrackets.pop();
      if (s[i] === ")") {
        iftrue = "(";
      }
      if (s[i] === "]") {
        iftrue = "[";
      }
      if (s[i] === "}") {
        iftrue = "{";
      }
      if (opening !== iftrue) {
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
