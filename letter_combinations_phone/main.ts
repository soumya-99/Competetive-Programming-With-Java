function letterCombinations(digits: string): string[] {
    const LETTERS = {
        "2": ['a', 'b', 'c'],
        "3": ['d', 'e', 'f'],
        "4": ['g', 'h', 'i'],
        "5": ['j', 'k', 'l'],
        "6": ['m', 'n', 'o'],
        "7": ['p', 'q', 'r', 's'],
        "8": ['t', 'u', 'v'],
        "9": ['w', 'x', 'y', 'z'],
    }

    const result: string[] = []

    console.log(LETTERS[2][0])
    
    return result
}

console.log(letterCombinations("23"))
