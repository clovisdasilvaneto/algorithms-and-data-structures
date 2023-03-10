/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 * 
 * Time complexty: O(N)
 */
var minSubArrayLen = function(target, nums) {
    let [left, sum] = [0, 0];
    let min = Infinity;

    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];

        while(sum >= target) {
            min = Math.min(min, i + 1 - left);
            sum -= nums[left];

            left++;
        }
    }

    return min != Infinity ? min : 0
};

const tar = 7;
const input = [2,3,1,2,4,3];
console.log(`The minimun length of ${input} is ${minSubArrayLen(tar, input)}`);