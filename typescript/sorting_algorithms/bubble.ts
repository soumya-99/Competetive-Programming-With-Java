function bubble(array: number[]): number[] {
  let isSorted: boolean = false
  for (let i = 0; i < array.length; i++) {
    isSorted = true
    for (let j = 1; j < array.length - i; j++) {
      if (array[j] < array[j - 1]) {
        swap(array, j, j - 1)
        isSorted = false
      }
    }
    if (isSorted) return array
  }
  return array
}

function swap(array: number[], i: number, j: number): void {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

// console.log(bubble([89, 45, 68, 90, 29, 34, 17]))
// huge array
console.log(bubble(new Array(100000).fill(0).map(() => Math.floor(Math.random() * 100000))))