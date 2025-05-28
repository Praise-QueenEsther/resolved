
//   <!-- Solve this : Problem Description:
// Given an array of positive integers and a positive integer k, find the maximum sum of any contiguous subarray of size k.
// Input:
// •  An array nums of positive integers.
// •  An integer k representing the size of the subarray.
// Output:
// •  An integer representing the maximum sum of any contiguous subarray of size k.
// Constraints:
// •  1 <= k <= nums.length <= 10^5
// •  1 <= nums[i] <= 10^4
// •  All numbers are positive integers.
// Examples:
// 1.  Input: nums = [1, 4, 2, 10, 2, 3, 1, 0, 20], k = 4Output: 24Explanation: The subarray [4, 2, 10, 2] has the maximum sum = 4 + 2 + 10 + 2 = 24.
// 2.  Input: nums = [5, 5, 5], k = 2 Output: 10 Explanation: The subarray [5, 5] has the maximum sum = 5 + 5 = 10.
// 3.  Input: nums = [1, 2, 3], k = 3 Output: 6 Explanation: The subarray [1, 2, 3] has the maximum sum = 1 + 2 + 3 = 6. -->


let intNum=[1,2,13,4,25,6,10,12,30,40]
let subArray=intNum.slice(1,5)
console.log(subArray)
k=4
const sum=subArray.reduce((acc,curr)=>{
    return acc+curr
},0)

console.log(sum)