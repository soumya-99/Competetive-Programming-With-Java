function counting(arr: number[]): number[] {
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    const counts = new Array(max - min + 1).fill(0)
    for (let i = 0; i < arr.length; i++) {
        counts[arr[i] - min]++
    }
    let sortedIndex = 0
    for (let i = min; i <= max; i++) {
        while (counts[i - min] > 0) {
        arr[sortedIndex++] = i
        counts[i - min]--
        }
    }
    return arr
}
