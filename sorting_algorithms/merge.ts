function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr
    }

    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left: number[], right: number[]): number[] {
    let resultArray: number[] = []
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex])
            leftIndex++
        } else {
            resultArray.push(right[rightIndex])
            rightIndex++
        }
    }

    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex))
}

console.log(mergeSort([89, 45, 68, 90, 29, 34, 17]))