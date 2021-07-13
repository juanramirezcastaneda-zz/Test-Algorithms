// Todo: remove duplicates by reference and return length 
// e.g: [1, 1, 1, 2, 3, 3, 4] sorted -> [1, 2, 3, 4] and return 4
// O(n) complexity

let removeDuplicates = (inputArray: number[]) => {
    console.log('input: ', inputArray);

    let counter = 1;
    for(let i=0; i <= inputArray.length;i++){
        if(inputArray[i] === inputArray[i+1]){
            counter++;
            inputArray.push(inputArray[i]);
        }
    }
    return counter;
};

let input = [1, 1, 2, 3, 4, 4];
removeDuplicates(input);
console.log('output: ', input);