const getMinWindow = (s, t) => {
    // ADOBECODEBANC // ABC
    const frequenceMap = new Map();

    // Creates the reference map, used for reference
    for(let i = 0; i < t.length; i++) {
        if(frequenceMap.has(t[i])) {
            frequenceMap.set(t[i], frequenceMap.get(t[i]) + 1)
        }else {
            frequenceMap.set(t[i], 1)
        }
    }

    let [left, right] = [0, 0]
    let counter = frequenceMap.size;
    let minWindowLength = Infinity;
    let minWindow = "";

    // moves right pointer
    while(right < s.length) {
        const rightLetter = s[right];
        console.log(minWindowLength === frequenceMap.size)

        if(frequenceMap.has(rightLetter)) {
            frequenceMap.set(rightLetter, frequenceMap.get(rightLetter) - 1);

            if(frequenceMap.get(rightLetter) == 0) counter--;
        }

        right++

        // moves left pointer
        while(counter === 0) {
            if(right - left < minWindowLength) {
                minWindowLength = right - left;
                minWindow = s.slice(left, right)
            }

            let leftLetter = s[left];

            if(frequenceMap.has(leftLetter)) {
                frequenceMap.set(leftLetter, frequenceMap.get(leftLetter) + 1);

                if(frequenceMap.get(leftLetter) > 0) counter++;
            }

            // leave all the loops in case the it is equal or less than the reference mapper
            if(minWindowLength <= frequenceMap.size) right = s.length;
            
            left++;
        }
    }

    return minWindow;
}

const str = "OABAACBAB"
const reference = "ABC"

const result = getMinWindow(str, reference);

console.log(`The smallest desirable window is ${result}`);