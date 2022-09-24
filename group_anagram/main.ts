// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Input: strs = [""]
// Output: [[""]]

// Input: strs = ["a"]
// Output: [["a"]]

function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>()
    for (const str of strs) {
        const key = str.split('').sort().join('')
        if (map.has(key)) {
            (map.get(key) as string[]).push(str)
        } else {
            map.set(key, [str])
        }
        console.log(map)
    }
    return Array.from(map.values())
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagrams(["a"]))
