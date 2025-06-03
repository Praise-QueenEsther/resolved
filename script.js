
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


function maxSum(arr,k){
  const subArrays=[]

  if(!Array.isArray(arr) || arr.length >10**5 ||arr.length<1){
    console.log("The length of the array must be <=10**5")
    return
  }

 for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number' || arr[i] < 1 || arr[i]>10**5) {
      console.log("every index must be a postive integer not greater than 10**5")
      return
    }
    
 }

  if (typeof k !== 'number' || k> arr.length || k<1 ||  k > 10 ** 4 ){
    console.log("K must be a positive integer and not more than 10**4")
    return
  }

  for (let i=0; i<arr.length; i=i+k) {
    subArrays.push(arr.slice(i,i+k))
    
  }

  
    let maxNum=0
    subArrays.forEach((singleArayy)=>{
    const arraySum= singleArayy.reduce((a,b)=>a + b,0)
    if(arraySum>maxNum){
        maxNum=arraySum
       }
  })

  
    return maxNum

}

console.log(maxSum([40,2,3,2,4,60],2))


