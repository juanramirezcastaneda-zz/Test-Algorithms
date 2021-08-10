let list = [23,4,42,15,16,8];

function bubbleSort(arr: number[]): void {
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
  } //recurse over the arr if the flag is set if(doItAgain) bubbleSort(arr);
}

const sortedList = bubbleSort(list);
console.log(sortedList); 

