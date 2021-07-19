// Todo: return the adjacent elements
// bonus -> avoid sorting and use recursion
// e.g: [100, 4, 200, 1, 3, 2] -> [1, 2, 3, 4, 100, 200] and return 4 adjacent elements
// O(n) complexity

var findConsecutive = (input: number[]) => {
    const sortedArray = input.sort((a, b) => a - b);
    const res = [];
 
    for (let i = 0; i < sortedArray.length; i++) {
        const element = sortedArray[i];
        const followingElement = sortedArray[i + 1];
        
        if(followingElement - element === 1){
            res.push(element);
            res.push(followingElement);
            i++;
        }
    }
    return res;
};

var findConsecutiveOptimized = () => {};
var input = [100, 4, 200, 1, 3, 2];
console.log(findConsecutive(input));