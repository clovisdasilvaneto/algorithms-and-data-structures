/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const nums1 = [1,2,3,3], nums2 = [1,1,2,2]

var findDifference = function(nums1, nums2) {
    const numsMapper = nums1.reduce((acc, current) => {
        acc.set(current, false);
        return acc;
    }, new Map())

    const distinctNum2 = nums2.filter((current) => {
        const hasCurrent = numsMapper.has(current);
        
        numsMapper.set(current, true);

        return !hasCurrent
    });

    const distinctNum1 = nums1.filter((current) => {
        const mapperValue = !numsMapper.get(current);
        
        numsMapper.set(current, true);
        
        return mapperValue
    })

    return [distinctNum1, distinctNum2]
};

console.log(findDifference(nums1, nums2))