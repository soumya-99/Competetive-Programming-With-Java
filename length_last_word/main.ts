function lengthOfLastWord(s: string): number {
    return (s.trim().split(" ").pop() as string).length
}

console.log(lengthOfLastWord("Hello World"))
