// var isAnagram = function (s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }
//   let sArr = s.split("");
//   let tArr = t.split("");
//   for (i = 0; i < tArr.length; i++) {
//     if (!sArr.includes(tArr[i])) {
//       return false;
//     } else {
//       let index = sArr.indexOf(tArr[i])
//       sArr.splice(index,1)
//     }
//   }
//   return true;
// };

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  sortedSWord = s.split('').sort().join('')
  sortedTWord = t.split('').sort().join('')
  return (sortedSWord === sortedTWord )
};

console.log(isAnagram("abe","bae"))
