// function sumOddLengthSubarrays(arr: number[]): number {
//     let sum: number = 0
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             if ((j - i + 1) % 2 === 1) {
//                 for (let k = i; k <= j; k++) {
//                     sum += arr[k]
//                 }
//             }
//         }
//     }
//     return sum
// }

function sumOddLengthSubarrays(arr: number[]): number {
    let sum: number = 0
	const N: number = arr.length
	for (let i = 0; i < arr.length; i++) {
		let total: number = i * (N - i) + (N - i)
		sum += Math.ceil(total / 2) * arr[i]
	}
	return sum
}

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]))
