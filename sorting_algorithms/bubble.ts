function bubble(array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      (array[j] < array[j - 1]) && swap(array, j, j - 1)
    }
  }
  return array
}

function swap(array: number[], i: number, j: number): void {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

console.log(bubble([89, 45, 68, 90, 29, 34, 17]))