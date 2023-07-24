// 242
function isAnagram(s: string, t: string): boolean {
    const sMap = new Map<string, number>()

    if (s.length === t.length) {
        for (let i = 0; i < s.length; i++) {
            if (sMap.has(s[i])) {
                sMap.set(s[i], sMap.get(s[i]) as number + 1)
            } else {
                sMap.set(s[i], 1)
            }
        }
        for (let i = 0; i < t.length; i++) {
            if (!sMap.has(t[i]))
                return false
            sMap.set(t[i], sMap.get(t[i]) as number - 1)
            if (sMap.get(t[i]) === 0)
                sMap.delete(t[i])
            console.log(sMap)
        }
        return sMap.size === 0
    }
    return false
}

console.log(isAnagram("anagram", "margana"))
console.log(isAnagram("a", "ab"))
