/**
 * @param {string} s
 * @return {number}
 * 
 * Time complexty: O(N)
 */
var lengthOfLongestSubstring = function(s) {
    let frequenceMap = new Map();
    let [right, left] = [0, 0];
    let maxSubstring = 0;

    while(right < s.length) {
        let rightLetter = s[right];

        if(frequenceMap.has(rightLetter)) {
            frequenceMap.set(rightLetter, frequenceMap.get(rightLetter) + 1)
        }else {
            frequenceMap.set(rightLetter, 1)
        }

        while(frequenceMap.get(rightLetter) > 1) {
            let leftLetter = s[left];
            frequenceMap.set(leftLetter, frequenceMap.get(leftLetter) - 1)

            left++;
        }

        maxSubstring = Math.max((right - left) + 1, maxSubstring);

        right++;
    }

    return maxSubstring
};

const sbs = "abcabcbb";
const result = lengthOfLongestSubstring(sbs)

console.log(`The longest length of the substring ${sbs} is: ${result}`)