/**
 * Problem: Two Sum
 * Difficulty: Easy
 * 
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target.
 * 
 * Example:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

 var twoSum = function(nums, target) {
    let arr=[];
                    
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                arr[0] = i;
                arr[1] = j;
                return arr;
            }
        }
    }
    
};

let nums = [2,7,11,15]; 
let target = 9;
console.log(twoSum(nums,target));