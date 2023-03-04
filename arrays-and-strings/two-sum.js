/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashMap = {};
    const output = [];

    for(let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if(typeof hashMap[diff] === "number") {
            output.push(i, hashMap[diff])
        }else {
            hashMap[nums[i]] = i
        }
    }

    return output
};