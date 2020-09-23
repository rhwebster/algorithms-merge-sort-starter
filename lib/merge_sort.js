function merge(array1, array2) {
  let mergeArray = [];

  while (array1.length && array2.length) {
    if (array1[0] < array2[0]) {
      mergeArray.push(array1.shift());
    } else {
      mergeArray.push(array2.shift());
    }
  }

  if (array1.length) {
    mergeArray.push(...array1)
  } else if (array2.length) {
    mergeArray.push(...array2)
  }

  return mergeArray;
}


function mergeSort(array) {
  if (array.length <= 1) return array;

  let midIdx = Math.floor(array.length / 2);
  let array1 = array.slice(0, midIdx);
  let array2 = array.slice(midIdx);

  let sorted1 = mergeSort(array1);
  let sorted2 = mergeSort(array2);

  return merge(sorted1, sorted2);
}

module.exports = {
  merge,
  mergeSort
};
