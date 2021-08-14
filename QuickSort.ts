let listToSort = [2, 8, 6, 5];
// var list = [23, 4, 42, 15, 16, 8, 3];
// let list = [100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const quickSort = (list: number[]): number[] => {
  //recursion check. If list is empty or of length 1, return
  if (list.length < 2) return list;

  //these are the partition lists we'll need to use
  let left = [],
    right = [];

  //default the pivot to the last item in the list
  let pivot = list.length - 1;

  //set the pivot value
  let pivotValue = list[pivot];

  //remove the pivot from the list as we don't want to compare it
  list = list.slice(0, pivot).concat(list.slice(pivot + 1));

  //loop the list, comparing the partition values
  for (var i = 0; i < list.length; i++) {
    if (list[i] < pivotValue) {
      left.push(list[i]);
    } else {
      right.push(list[i]);
    }
  } //do it all again
  return quickSort(left).concat([pivotValue], quickSort(right));
};

console.time("complexitysort");

console.log(quickSort(listToSort));

console.timeEnd("complexitysort");

export { quickSort };
