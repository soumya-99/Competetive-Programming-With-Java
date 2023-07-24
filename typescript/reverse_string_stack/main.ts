function reverseStringStack(str: string): string {
    const stack: string[] = []
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i])
    }
    return stack.reverse().join("")
}

console.log(reverseStringStack("hello"))