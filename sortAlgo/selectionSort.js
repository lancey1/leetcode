// Selection Sort:
// Pros:

// Simple implementation.
// In-place sorting algorithm.
// Cons:

// Inefficient for large datasets.
// Has a worst-case and average-case time complexity of O(n^2).


function selectionSort(arr) {
  const length = arr.length;
  
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    
    // Find the index of the minimum element in the remaining unsorted portion of the array
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    
    // Swap the minimum element with the current element
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  
  return arr;
}


// Example usage:
const arr = [8, 4, 2, 7, 1, 5, 9, 3, 6];
const sortedArr = selectionSort(arr);
console.log(sortedArr);
