// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


function longestCommonPrefix(strs: string[]): string {
    let result = ""
    for (let i = 0; i < strs[0].length; i++) {
        for (let j of strs) {
            if (i === j.length || j[i] !== strs[0][i])
            return result
        }
        result += strs[0][i]
    }
    return result
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
