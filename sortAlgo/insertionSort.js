// Insertion Sort:
// Pros:

// Efficient for small datasets and partially sorted data.
// In-place sorting algorithm.
// Cons:

// Inefficient for large datasets.
// Has a worst-case and average-case time complexity of O(n^2).

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // arr[i] = 5
    let current = arr[i];

    let j = i - 1;
    console.log("current:" ,current)
    while (0 <= j && current < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    console.log("arr[j+1]" ,arr[j+1])
    arr[j + 1] = current;
  }

  return arr;
}

// Example usage:
const numbers = [5, 3, 8, 4, 2];
console.log(insertionSort(numbers));