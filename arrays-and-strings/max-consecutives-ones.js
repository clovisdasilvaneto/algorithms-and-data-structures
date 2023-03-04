/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * Time complexty: O(N)
 */
var longestOnes = function(nums, k) {
    let [right, left, total] = [0,0,0];
    let size = k;

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

        total = Math.max(total, 1 + right - left)

        right++;
    }

    return total
};

const nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2;

console.log(longestOnes(nums, k));