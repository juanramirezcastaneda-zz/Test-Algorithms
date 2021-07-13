// Todo: remove duplicates by reference and return length 
// e.g: [1, 1, 1, 2, 3, 3, 4] sorted -> [1, 2, 3, 4] and return 4
// O(n) complexity

let removeDuplicates = (inputArray: number[]) => {
    let counter = 0;
    let initialLength = inputArray.length;
    for (let i in inputArray) {

        let index = Number(i);
        if(inputArray[index] === inputArray[index + 1]){
            counter++;
            inputArray.push(inputArray[index]);
        } 
        if(inputArray.slice(initialLength).indexOf(inputArray[index]) === -1){
            inputArray.push(inputArray[index]);
        }
    }
    inputArray.splice(0, initialLength);
    return counter;
};

let input =  [1, 1, 1, 2, 3, 3, 4] ;
// input = [1, 2, 2, 3, 3, 4]; 
console.log('input: ', input);
console.log('result: ',removeDuplicates(input));
console.log('output: ', input);