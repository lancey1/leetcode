// Heap Sort:
// Pros:

// Efficient for large datasets.
// In-place sorting algorithm.
// Guarantees a worst-case time complexity of O(n log n).
// Cons:

// Requires additional space for the heap data structure.
// Not a stable sorting algorithm.

function heapSort(array) {
  // Build heap (rearrange array)
  buildHeap(array);

  // Extract elements one by one from the heap
  for (let i = array.length - 1; i > 0; i--) {
      // Move current root to the end
      swap(array, 0, i);

      // Heapify the reduced heap
      heapify(array, i, 0);
  }

  return array;
}

function buildHeap(array) {
  const n = array.length;

  // Build a max heap from the bottom up
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(array, n, i);
  }
}

function heapify(array, n, i) {
  let largest = i; // Initialize the largest as root
  const left = 2 * i + 1; // Left child
  const right = 2 * i + 2; // Right child

  // If left child is larger than root
  if (left < n && array[left] > array[largest]) {
      largest = left;
  }

  // If right child is larger than the largest so far
  if (right < n && array[right] > array[largest]) {
      largest = right;
  }

  // If the largest is not the root
  if (largest !== i) {
      swap(array, i, largest);

      // Recursively heapify the affected sub-tree
      heapify(array, n, largest);
  }
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// Example usage
const arr = [4, 10, 3, 5, 1];
console.log("Original array:", arr);
const sortedArray = heapSort(arr);
console.log("Sorted array:", sortedArray);