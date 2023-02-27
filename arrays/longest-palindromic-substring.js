/**
 * @param {string} s
 * @return {string}
 * 
 * Time complexty: O(N²)
 */
var longestPalindrome = function(s) {
    let longest = "";

    for(let i = 0; i <= s.length - 1; i++) {
        let left = right = i;
        let temp = "";

        while(left >= 0 && right <= s.length - 1 && s[right] === s[left]) {
            temp = s.slice(left, right + 1);
            right++;
            left--;
        }

        left = i;
        right = i + 1;

        while(left >= 0 && right <= s.length - 1 && s[right] === s[left]) {
            if(right - left > temp.length - 1) {
                temp = s.slice(left, right + 1);
            }

            right++;
            left--;
        }

        if(temp.length > longest.length) {
            longest = temp;
        }
    }

    return longest
};