function letterCombinations(digits: string): string[] {
    const map: string[] = [
        '0',
        '1',
        'abc',
        'def',
        'ghi',
        'jkl',
        'mno',
        'pqrs',
        'tuv',
        'wxyz'
    ]
    let res: string[] = []
    if (digits.length === 0) {
        return res
    }
    res.push('')
    for (let i = 0; i < digits.length; i++) {
        let tmp: string[] = []
        let letters: string = map[parseInt(digits[i])]
        for (let j = 0; j < letters.length; j++) {
            for (let k = 0; k < res.length; k++) {
                tmp.push(res[k] + letters[j])
            }
        }
        res = tmp
    }
    return res
}

console.log(letterCombinations("23"))
