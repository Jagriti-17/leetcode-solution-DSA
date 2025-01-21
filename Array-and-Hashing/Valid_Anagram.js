/**
 * Problem: Valid Anagram
 * Difficulty: Easy
 * 
 * Given two strings s and t, return true if t is an anagram
 * of s, and false otherwise.
 * 
 *
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 * 
 */

var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false; 
    }
    
   
    let sortedS = s.split('').sort().join('');
    let sortedT = t.split('').sort().join('');
    
    return sortedS === sortedT;

};

let s = "anagram", t = "nagaram";
console.log(isAnagram(s,t));

