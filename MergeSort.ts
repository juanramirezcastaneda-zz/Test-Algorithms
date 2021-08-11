var list = [2, 8 , 6, 5];
// var list = [23, 4, 42, 15, 16, 8, 3];
// let list = [100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];


const merge = (left: number[], right: number[]) => {
  var result = [];
  //if the left and right lists both have elements
  //run a comparison
  while (left.length || right.length) {
    //if there are items in both sides...
    if (left.length && right.length) {
      //if the first item on left is //less than right...
      if (left[0] < right[0]) {
        //take the first item on the left
        result.push(left.shift());
      } else {
        //otherwise take the first item
        //on the right
        result.push(right.shift());
      }
      //if the right list is empty and
      //the left is not...
    } else if (left.length) {
      result.push(left.shift());
    } else {
      //there are items remaining on the right
      result.push(right.shift());
    }
  }
  return result;
};

const mergeSort = (list: number[]): any => {
  let left: number[] = [],
    right: number[] = [];

  if (list.length <= 1) {
    return list;
  }

  let middle = list.length / 2;
  left = list.slice(0, middle);
  right = list.slice(middle, list.length);

  return merge(mergeSort(left), mergeSort(right));
};

console.time('complexitysort');

console.log(mergeSort(list));

console.timeEnd('complexitysort');

export { mergeSort };
