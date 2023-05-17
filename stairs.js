function climbStairs(n) {
  if (n === 0 || n === 1) {
    return 1; // Base case: There is only one way to reach step 0 or 1.
  }

  const ways = Array(n + 1); 
   // Array to store the number of ways to reach each step
  ways[0] = 1;
  ways[1] = 1;
  for (let i = 2; i <= n; i++) {
    ways[i] = ways[i - 1] + ways[i - 2];
    console.log(ways)
  }
  return ways[n]; // Number of distinct ways to reach step n (the top of the staircase)
}

// console.log(climbStairs(3)); // Output: 3
// console.log(climbStairs(4)); // Output: 5
console.log(climbStairs(5)); // Output: 8