/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let hit = i = 0;

    if(needle.length > haystack.length) return -1
    if(needle === haystack) return 0

    while(hit < needle.length && i < haystack.length) {
        if(haystack[i] === needle[hit]) {
            hit++;
        }else {
            i = i - hit;
            hit = 0;
        }
        
        i++;
    }
    
    if(hit < needle.length) return -1;
    return i - hit
};