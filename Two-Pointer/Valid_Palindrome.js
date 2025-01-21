/**
 * Problem: Valid Palindrom
 * Difficulty: Easy
 * 
 * Given a string s, return true if 
 * it is a palindrome, or false otherwise.
 * 
 *
 * Example:
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 * 
 */

var isPalindrome = function(s) {
    const cleanS = s.toLowerCase().replace(/[^a-z0-9]/g,'')
    return cleanS == cleanS.split('').reverse().join('')
    
};

let s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s));
