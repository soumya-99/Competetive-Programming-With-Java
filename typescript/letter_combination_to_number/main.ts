function alphabetCombinationToNumber(str: string): number[] {
    if (str === "") return []
    // const LETTERS = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
    // const LettersMap = {
    //     2: "abc",
    //     3: "def",
    //     4: "ghi",
    //     5: "jkl",
    //     6: "mno",
    //     7: "pqrs",
    //     8: "tuv",
    //     9: "wxyz",
    // }

    let map = new Map<number, string>()
    map.set(2, "abc")
    map.set(3, "def")
    map.set(4, "ghi")
    map.set(5, "jkl")
    map.set(6, "mno")
    map.set(7, "pqrs")
    map.set(8, "tuv")
    map.set(9, "wxyz")
    // for (let i = 0; i < LETTERS.length; i++) {
    //     if (LETTERS[0]) return 2
    //     if (LETTERS[0]) return 2
    //     if (LETTERS[0]) return 2
    //     if (LETTERS[0]) return 2
    //     if (LETTERS[0]) return 2
    //     if (LETTERS[0]) return 2
    // }
    // for (let i = 0; i < LettersMap)
    let numArr: number[] = []
    let arr: string[] = str.split("")
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < map.size; j++) {
            let mapArr: string[] | undefined = map.get(j + 2)?.split("")
            
        }
    }
    console.log()

    console.log(map)
    
    return []

}

console.log(alphabetCombinationToNumber("ad")) // [2, 3]

