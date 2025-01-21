/**
 * Problem: Valid Anagram
 * Difficulty: Medium
 * 
 * Given an array of strings strs, group the anagrams 
 * together. You can return the answer in any order.
 * 
 *
 * Example:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 * Source: 30 days Coding
 * Resource Link: https://courses.30dayscoding.com
 */

var groupAnagrams = function(strs) {
    const anagramWord = new Map();

    for (const words of strs){
        const sortedWord = words.split('').sort().join('');

        if (anagramWord.has(sortedWord)){
            anagramWord.get(sortedWord).push(words);
        }
        else{
            anagramWord.set(sortedWord, [words])
        }
    }
    return Array.from(anagramWord.values());
};

let strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs));
