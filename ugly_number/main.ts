function isUgly(n: number): boolean {
    if (n <= 0) return false
    while (n % 2 === 0) n /= 2
    while (n % 3 === 0) n /= 3
    while (n % 5 === 0) n /= 5

    if (n === 1) return true
    return false
}

console.log(isUgly(14))
console.log(isUgly(6))
console.log(isUgly(1))







// <-- To Check -->


// function prime(x: number) {
//     let flag: number = 0;
//     for (let i = 2; i < x / 2; i++) {
//         if (x % i === 0)
//             flag++;
//     }

//     return flag > 0 ? false : true;
// }

// var isUgly = function (n) {
//     if (n === 2 || n === 3 || n === 5)
//         return true;

//     let arr = []

//     let i = 2;
//     while (i <= n / 2) {
//         if (n % i === 0) {
//             if (prime(i))
//                 arr.push(i);
//         }
//         i++;
//     }

//     let arr1 = [];
//     for (let x of arr) {
//         if (x != 2 || x != 3 || x != 5)
//             arr1.push(x);
//     }

//     console.log(arr1)
//     return (arr1.length > 0) ? false : true;

// }