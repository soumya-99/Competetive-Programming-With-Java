function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 !== str2 + str1) {
        return ""
    }
    const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b))

    return str1.slice(0, gcd(str1.length, str2.length))
}

console.log(gcdOfStrings("ABCABC", "ABC"))
console.log(gcdOfStrings("LEET", "CODE"))
console.log(gcdOfStrings("ABABAB", "ABAB"))
