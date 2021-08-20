let listToSort = [2, 8, 6, 5];
// var list = [23, 4, 42, 15, 16, 8, 3];
// let list = [100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const selectionSort = (list: number[]): number[] => {
  for (var i = 0; i < list.length - 1; i++) {
    //default the min value to the first item in the list
    //all we need do is track the index for now
    let currentMinIndex = i;
    //loop over the list, skipping the currentMinIndex
    for (let x = currentMinIndex + 1; x < list.length; x++) {
      //if the current list item is less than the current min value...
      if (list[x] < list[currentMinIndex]) {
        //reset the index
        currentMinIndex = x;
      }
    } //has the index changed?
    if (currentMinIndex != i) {
      //if yes, switch the values in the list
      let oldMinValue = list[i];
      list[i] = list[currentMinIndex];
      list[currentMinIndex] = oldMinValue;
    }
  }
  return list;
};

console.time("complexitysort");

console.log(selectionSort(listToSort));

console.timeEnd("complexitysort");

export { selectionSort as quickSort };
