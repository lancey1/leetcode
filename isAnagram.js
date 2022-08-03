var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let sArr = s.split("");
  let tArr = t.split("");
  for (i = 0; i < tArr.length; i++) {
    if (!sArr.includes(tArr[i])) {
      return false;
    } else {
      let index = sArr.indexOf(tArr[i])
      sArr.splice(index,1)
    }
  }
  return true;
};
