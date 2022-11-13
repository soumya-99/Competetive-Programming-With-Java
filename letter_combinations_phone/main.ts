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
        let temp: string[] = []
        let letters: string = map[parseInt(digits[i])]
        console.log(letters)

        for (let j = 0; j < letters.length; j++) {
            for (let k = 0; k < res.length; k++) {
                console.log(res)
                
                temp.push(res[k] + letters[j])
            }
        }
        res = temp
        console.log(temp)
    
    }
    return res

    // let map = new Map<number, string[]>()
    // map.set(2, 'abc'.split(""))
    // map.set(3, 'def'.split(""))
    // map.set(4, 'ghi'.split(""))
    // map.set(5, 'jkl'.split(""))
    // map.set(6, 'mno'.split(""))
    // map.set(7, 'pqrs'.split(""))
    // map.set(8, 'tuv'.split(""))
    // map.set(9, 'wxyz'.split(""))
    // let res: string[] = []
    // console.log(map)
    // if (digits.length === 0) {
    //     return res
    // }

    // for (let i of map) {
    //     if (digits.includes(i[0].toString())) {
    //         res.push(...i[1])
    //     }
    // }
    
    // return res
}

console.log(letterCombinations("253145"))
