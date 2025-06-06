
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
  //  I initialized subArrays as empty array to form a nested array with singleArrays
  const subArrays=[]
// The if statement here ensures that the length of any array must not exceed 10**5 and cannot be less than 1, to ensure positive integers and must be an array
  if(!Array.isArray(arr) || arr.length >10**5 ||arr.length<1){
    console.log("The length of the array must be 10**5")
    return
  }
// The for loop, loops over the entire array and increases by 1 with each iteration starting from 0 without exceeding the length of the array 
// The if statement inside the for loop ensures that each element of the array is a positive integer, must be a number and not greater than 10**5
 for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number' || arr[i] < 1 || arr[i]>10**5) {
      console.log("every index must be a postive integer not greater than 10**5")
      return
    }
    
 }
// This if statement directly below ensures that k is a number, k can't be greater than the length of the array,and it can't be less than 1 nor more than 10**4
  if (typeof k !== 'number' || k> arr.length || k<1 ||  k > 10 ** 4 ){
    console.log("K must be a positive integer and not more than 10**4")
    return
  }

  
  // This part gives the contiguous subarrays which I pushed them into a variable called subArrays which was initailly an empty array
  // This "for loop",loops over the entire array starting from 0 and increament by 1.
  // initially i=0, assuming k=2 at initial, 
 // i<=arr.length-k: the last valid index of the array to start from base on k size to avoid exceeding the end array
//  arr.slice(i,i+k): creates the subarrays of size k
  // I pushed the subarrays into the variable called subArrays to form the nested array
  for (let i=0; i<=arr.length-k; i++) {
    subArrays.push(arr.slice(i,i+k))
   
  }


  // This gives the maximum sum of any of the contiguous subarray of size k
  // The forEach function iterates over the array and brings out the nested arrays
    // i.e [[40,2],[2,3],[3,4],[4,60]]=
    // [40,2]
    //  [2,3]
    // [3,4]
    // [4,60]

    // The reduce function adds up the element of each array 
    // The arraySum is the variable which holds the individual sum of the subarrays
    // The if statement ensures that if arraySum is greater than maxSum which I initialize as 0, then maxSum should become the value of the arraySum
  let maxNum=0
    subArrays.forEach((singleArayy)=>{
    const arraySum= singleArayy.reduce((a,b)=>a + b,0)
    if(arraySum>maxNum){
        maxNum=arraySum
       }
  })

  // this returns the maximum-sum value of the maxSum which is a contiguous subarray of size k
    return maxNum

}

const result=maxSum([40,2,3,4,60],2)
console.log(result)


