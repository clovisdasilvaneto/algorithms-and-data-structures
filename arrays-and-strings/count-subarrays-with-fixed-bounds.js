/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    let total = 0;
    let leftBound = minI = maxI = -1;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === minK) minI = i;
        if(nums[i] === maxK) maxI = i;
        if(nums[i] > maxK || nums[i] < minK) leftBound = i;

        if(minI >= 0 && maxI >= 0) {
            const subarrays = Math.min(minI, maxI) - leftBound

            if(subarrays >= 0) total += subarrays;
        }
    }

    return total
};