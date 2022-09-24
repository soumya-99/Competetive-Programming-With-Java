// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let nums: number[] = [...nums1, ...nums2]
    nums.sort((a, b) => a - b)

    let mid: number = Math.floor(nums.length / 2)
    if (nums.length % 2 === 0) {
        return (nums[mid - 1] + nums[mid]) / 2
    } else {
        return nums[mid]
    }
}

console.log(findMedianSortedArrays([1, 3], [2]))
console.log(findMedianSortedArrays([1, 2], [3, 4]))
