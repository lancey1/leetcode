// Quick Sort:
// Pros:
// Efficient for large datasets.
// In-place sorting algorithm.
// Generally faster than most other sorting algorithms.
// Cons:
// Worst-case time complexity of O(n^2) can occur (although rare with proper pivot selection).
// Not a stable sorting algorithm (may change the order of equal elements).

// Can implement Median of 3 to further optimize pivot selection

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[arr.length-1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

array = [10,8,5,4,3,2,11,8];

console.log(quickSort(array));
