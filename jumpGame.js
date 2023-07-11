var jump = function (nums) {
  let left = 0
  let right = 0
  let jumps = 0

  while (right < nums.length - 1) {
    const maxReach = getMaxReach(nums, left, right);

    left = right + 1;
    right = maxReach;
    jumps += 1;
  }

  return jumps;
};

const getMaxReach = (nums, left, right, maxReach = 0) => {
  for (let i = left; i < right + 1; i++) {
    const reach = nums[i] + i;
    maxReach = Math.max(maxReach, reach);
  }
  console.log(maxReach)
  return maxReach;
};


console.log(jump(nums))