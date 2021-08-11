// let list = [23,4,42,15,16,8];
let list = [100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const bubbleSort = (arr: number[]) =>  {
  //a flag to tell us if we need to sort this arr again
  var doItAgain = false;
  //loop variables
  var limit = arr.length;
  var defaultNextVal = Number.POSITIVE_INFINITY;
  //loop over the arr entries...
  for (var i = 0; i < limit; i++) {
    //the current arr value
    var thisValue = arr[i];
    //the next value inline, which we'll default to a really high number
    var nextValue = i + 1 < limit ? arr[i + 1] : defaultNextVal;
    //is the next number lower than the current?
    if (nextValue < thisValue) {
      //if yes, we switch the values
      arr[i] = nextValue;
      arr[i + 1] = thisValue;
      //since we made a switch we'll set a flag //as we'll need to execute the loop again
      doItAgain = true;
    }
  } 
  //recurse over the arr if the flag is set 
  if(doItAgain) {
    bubbleSort(arr)
  };
  
  return arr;
}

console.time('complexitysort');

console.log(bubbleSort(list)); 

console.timeEnd('complexitysort');
