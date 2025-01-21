/**
 * Problem: Contains Duplicate
 * Difficulty: Easy
 * 
 * Given an integer array nums, return true if any value appears 
 * at least twice in the array, and return false if every element is 
 * distinct.
 * 
 *
 * Example:
 * Input: nums = [1,2,3,1]
 * Output: true
 * Explanation: The element 1 occurs at the indices 0 and 3.
 * 
 */

var containsDuplicate = function(nums) {    
    const numObject = {};
    for(let num of nums){
        numObject[num] = (numObject[num] || 0) + 1;
    }
    for(let key in numObject){
        if(numObject[key]>1){
            return true;
        }  
       
    }
    return false;
    
}

let nums = [1,2,3,1];
console.log(containsDuplicate(nums));