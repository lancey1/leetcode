let longestConsecutive = (nums) => {
  const numSet = new Set(nums); /* Time O(N) | Space O(N) */
  let maxScore = 0;
  for (const num of [...numSet]) {
    /* Time O(N) */
    const prevNum = num - 1;
    // find the start of the sequence, if true that means the current number is not the start of the sequence and will skip to next iteration
    if (numSet.has(prevNum)) continue; /* Time O(N) */

    let [currNum, score] = [num, 1];
    function isStreak() {
      return numSet.has(currNum + 1);
    }
    while (isStreak()) {
      /* Time O(N) */
      currNum++;
      score++;
    }

    maxScore = Math.max(maxScore, score);
  }

  return maxScore;
};

let nums = [0, 1, 3];
console.log(longestConsecutive(nums));
// nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
// console.log(longestConsecutive(nums2));
