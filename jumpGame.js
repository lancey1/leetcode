function jump(nums) {
  for (let i = 0; i < nums.length; i++) {
    let jumpSteps = nums[i];
    listofSteps = stepsThatCanBeTaken(jumpSteps);
    listofStepslength = listofSteps.length
    highestJump =  findHighestAvailJump(listofSteps,nums,listofStepslength)
    console.log(highestJump)
  }
}

function stepsThatCanBeTaken(num) {
  availStepsArr = [];
  for (let j = 1; j <= num; j++) {
    availStepsArr.push(j);
  }
  return availStepsArr;
}

function findHighestAvailJump(stepsArr, nums,lengthofArr) {
  jumpArr = [];
  for (let i= stepsArr[0]; i < lengthofArr; i++) {
    jumpArr.push(nums[i])
  }
  return Math.max(jumpArr);
}


// let listofSteps = [1,2]
// let lengthofStepsArr = listofSteps.length
nums = [2, 3, 1, 1, 4];

// console.log(findHighestAvailJump(listofSteps,nums,lengthofStepsArr))

console.log(jump(nums));
s