var twoSum = function (nums, target) {
  for (let i = 0 ; i < nums.length; i++) {
    let complementaryNumber = target - nums[i];
    if (nums.indexOf(complementaryNumber, i + 1) > -1) {
      return [i, nums.indexOf(complementaryNumber,i+1)];
    }
  }
};
