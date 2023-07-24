function dailyTemperatures(temperatures: number[]): number[] {
    let result: number[] = []
    for (let i = 0; i < temperatures.length; i++) {
        let j = i + 1
        while (j < temperatures.length) {
            if (temperatures[j] > temperatures[i]) {
                result.push(j - i)
                break
            }
            j++
        }
        if (j === temperatures.length) {
            result.push(0)
        }
    }
    return result
}

// function dailyTemperatures(temperatures: number[]): number[] {}
console.time("start")
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
console.timeEnd("start")
