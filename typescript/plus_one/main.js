function plusOne(digits) {
    for (var i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        if (digits[i] >= 10) {
            digits[i] = 0;
        }
        else {
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
}
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
console.log(plusOne([9]));
console.log(plusOne([1, 9, 9]));
