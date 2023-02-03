/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * Time complexty: O(N)
 */
var numberOfSubarrays = function(nums, k) {
    let [left, right, total] = [0, 0, 0];
    let kSize = k;
    let isForward = false;
    let leftCounter = 0;
    let rightCounter = 0;

    while(right < nums.length) {
        if(nums[right] % 2 !== 0) {
            kSize--;

            if(kSize === 0) {
                isForward = true;
            }
        }

        //forward left
        while(kSize === 0) {
            if(nums[left] % 2 !== 0) {
                kSize++;
            }

            leftCounter++;
            left++;
        }
        
        // //forward right
        while(isForward) {
            rightCounter++;

            let currentNum = nums[right + rightCounter];
            
            if(currentNum % 2 !== 0) {
                isForward = false;
            }
        }

        total += rightCounter * leftCounter;
        
        leftCounter = 0;
        rightCounter = 0

        right++;
    }

    
    return total;
};

const nums = [2,2,2,1,2,2,1,2,2,2]
const k = 2;

console.log(`The amount of nice arrays are: ${numberOfSubarrays(nums, k)}`)