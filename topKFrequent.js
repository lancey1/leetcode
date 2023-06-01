var topKFrequent = function (nums, k) {
  let frequency = {};
  for (let i = 0; i < nums.length; i++) {
    if (frequency.hasOwnProperty(nums[i])) {
      frequency[nums[i]] += 1;
    } else {
      frequency[nums[i]] = 1;
    }
  }
  let result = Object.keys(frequency).map((key) => [
    Number(key),
    frequency[key],
  ]);
  let sortedResult = result.sort((a, b) => {
    return b[1] - a[1];
  });
  let output = [];
  for (let i = 0; i < k; i++) {
    output.push(sortedResult[i][0]);
  }
  return output;
};

// var topKFrequent = function(nums, k) {
//   map = new Set(nums)
//   console.log(map)
//   };

nums = [1, 1, 1, -1, -1, -1, 2, 2, 3];

k = 2;

console.log(topKFrequent(nums, k));
