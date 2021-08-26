const list = [1, 2, 3, 4, 5, 6];
function binarySearch(list: number[], lookFor: number) {
  let min = 0,
    max = list.length - 1;
  let middle;
  while (min <= max) {
    //find the middle of the list
    middle = Math.floor((min + max) / 2);
    //if we just happen to land on it...
    if (list[middle] === lookFor) {
      return middle;
    } else {
      //the list is sorted, so reset the list according to //position
      list[middle] < lookFor ? (min = middle) : (max = middle);
    }
  }
  return -1;
}

console.time("binarySearch");

console.log(binarySearch(list, 3));

console.timeEnd("binarySearch");

export { binarySearch };
