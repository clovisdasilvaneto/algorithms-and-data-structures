/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
  let sum = 0;
  let left = 0;
  let nSubArrays = 0;

  if(arr.length < k) return 0;

  for(let i = 0; i <= arr.length; i++) {
      sum += arr[i]

      if(i >= k - 1) {
          if(sum / k >= threshold) {
              nSubArrays++;
          }
          
          sum -= arr[left];
          left++;
      }
  }

  return nSubArrays;
};

let input = [2,2,2,2,5,5,5,8], k = 3, threshold = 4;
console.log(`The num of subarrays for the input: [${input}],`)
console.log(`where the desired size is ${k} and the avarage should be greatter than: ${threshold}, is: `)
console.log(numOfSubarrays(input, k, threshold));
