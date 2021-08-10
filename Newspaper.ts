
/**
* Given a newspaper which is represented as an array of words, determine if you are able to generate
* the given word cloud which is also represented as an array of words.
*
* Considerations
* 1. Words can be repeated in both the newspaper and word cloud.
* 2. You cannot use the same word from the newspaper multiple times, so if the word is repeated
* in the word cloud you must find at least as many occurrences of that word in the newspaper.
* 3. The exercise examines full words, not parts of words or characters.
*
* Examples
* canMakeWordCloud(newspaper, wordCloud)
* canMakeWordCloud(['my', 'city', 'rules', 'car', 'boat'], ['my', 'city', 'drools']) // false
* canMakeWordCloud(['my', 'city', 'rules'], ['my', 'city', 'my', 'rules']) // false
* canMakeWordCloud(['my', 'city', 'rules', 'my', 'team', 'wins', 'my'], ['my', 'rules', 'my', 'city']) // true
* Bonus: O(n) without using 2 cycles 
**/

const canMakeWordCloud = (np: string[], wc: string[]) => {

    for(let el of wc){
        let indexInsideNp = np.indexOf(el);
        if(indexInsideNp === -1){
            return false;
        }else {
            np.splice(indexInsideNp, 1);
        };

    }
    return true;
};


// const newsPaper = ['my', 'city', 'rules', 'car', 'boat'];
// const wordCloud = ['my', 'city', 'drools'];

const newsPaper = ['my', 'rules', 'city'];
const wordCloud = ['my', 'city', 'my', 'rules'];

// const newsPaper = ['my', 'city', 'rules', 'my', 'team', 'wins', 'my'];
// const wordCloud = ['my', 'rules', 'my', 'city'];

// console.log(canMakeWordCloud(newsPaper, wordCloud));

const canMakeWordCloudOptimized = (npMap: Map<string, number>, wcV2: string[]) => {

    for(let w of wcV2){
        let key = npMap.get(w);
        if(key && key > 0){
            npMap.set(w, key - 1);
        } else {
            return false;
        }
    }
    return true;
};

const newsPaperMap = new Map();

newsPaperMap.set('my', 2);
newsPaperMap.set('city', 1);
newsPaperMap.set('rules', 1);

const wordCloudV2 = ['my', 'city'];

console.log(canMakeWordCloudOptimized(newsPaperMap, wordCloudV2));

export {canMakeWordCloudOptimized};