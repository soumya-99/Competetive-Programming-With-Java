function selection(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        swap(arr, minIndex, i)
    }
    return arr
}

function swap(array: number[], i: number, j: number): void {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

console.log(selection([89, 45, 68, 90, 29, 34, 17]))