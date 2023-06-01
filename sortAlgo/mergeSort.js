// Merge Sort:

// Pros:
// Efficient for large datasets.
// Stable sorting algorithm (maintains the order of equal elements).
// Guarantees a worst-case time complexity of O(n log n).
// Cons:
// Requires additional space for temporary arrays.
// Recursive implementation may lead to stack overflow for extremely large datasets.

// Merge two sorted arrays into a single sorted array
function merge(left, right) {
  let merged = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Push remaining elements of left array
  while (leftIndex < left.length) {
    merged.push(left[leftIndex]);
    leftIndex++;
  }

  // Push remaining elements of right array
  while (rightIndex < right.length) {
    merged.push(right[rightIndex]);
    rightIndex++;
  }

  return merged;
}

// Merge sort implementation
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

// Example usage:
const arr = [8, 4, 2, 7, 1, 5, 9, 3, 6];
const sortedArr = mergeSort(arr);
console.log(sortedArr);
