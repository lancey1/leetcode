// var groupAnagrams = function (strs) {
//   if (strs.length <= 1) {
//     return [strs];
//   }
//   let currentWord = strs[0];
//   let subArr = [];
//   let i = 0;
//   do {
//     if (strs[i] === "") {
//       subArr.push(strs[i]);
//       strs.splice(strs.indexOf(strs[i]), 1, `%`);
//       console.log(strs)
//     }
//     if (isAnagram(currentWord, strs[i])) {
//       subArr.push(strs[i]);
//       strs.splice(strs.indexOf(strs[i]), 1, `%`);
//     } else {
//       i++;
//     }
//   } while (i < strs.length - 1);
//   strs = strs.filter((word) => word !== `%`);
//   return [subArr, ...groupAnagrams(strs)];
// };

// strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// console.log(groupAnagrams(strs));

// str1 = ["", ""];

// console.log(groupAnagrams(str1));

// str2 = [""];

// console.log(groupAnagrams(str2));

// function isAnagram(s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }
//   let sArr = s.split("");
//   let tArr = t.split("");
//   for (i = 0; i < tArr.length; i++) {
//     if (!sArr.includes(tArr[i])) {
//       return false;
//     } else {
//       let index = sArr.indexOf(tArr[i]);
//       sArr.splice(index, 1);
//     }
//   }
//   return true;
// }

const groupAnagrams = (strs) => {
  const map = new Map();

  for (const word of strs) {
    const sortedWord = word.split('').sort().join('');
    if (map.has(sortedWord)) {
      map.get(sortedWord).push(word);
    } else {
      map.set(sortedWord, [word]);
    }
  }
  console.log(map)
  return Array.from(map.values());
};

strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(strs));