// Bubble Sort:
// Pros:
// Easy to understand and implement.
// Requires minimal additional space.
// Cons:

// Inefficient for large datasets.
// Has a worst-case and average-case time complexity of O(n^2).



function bubbleSort(arr) {
  let swapped;
  let sortedArr = [...arr];
  do {
    swapped = false;
    for (i = 0; i < sortedArr.length - 1; i++) {
      if (sortedArr[i] > sortedArr[i + 1]) {
        let temp = sortedArr[i];

        sortedArr[i] = sortedArr[i + 1];
        sortedArr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return sortedArr;
}

array = [10, 8, 5, 4, 3, 2, 11, 8];

console.log(bubbleSort(array));
