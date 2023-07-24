function maximum69Number(num: number): number {
    let str: string = num.toString()
    let res: string[] = str.split("")
    for (let i = 0; i < res.length; i++) {
        if (res[i] === "6") {
            res[i] = "9"
            break
        }
    }
    return parseInt(res.join(""))
}

console.log(maximum69Number(9669))
