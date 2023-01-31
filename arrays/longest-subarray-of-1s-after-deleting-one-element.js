/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let [right, left, total] = [0,0,0];
    let size = 1;

    while(right < nums.length) {
        if(nums[right] === 0) {
            size--;
        }

        while(size < 0) {
            if(nums[left] === 0) {
                size++;
            }

            left++;
        }

        total = Math.max(total, 1 + right - 1 - left)

        right++;
    }

    return total
};

const input = [0,1,1,1,0,1,1,0,1];

console.log(longestSubarray(input))