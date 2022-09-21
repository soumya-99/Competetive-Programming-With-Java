/**Given two strings A and B, find if A is a subsequence of B */
/**string 392 */
function issubsequence(A, B) {
    var n = A.length;
    var m = B.length;
    var i = 0, j = 0;
    while (i < n && j < m) {
        if (A[i] === B[j])
            i++;
        j++;
    }
    return i === n;
    // let s = A.
}
console.log(issubsequence("seed", "appleseeds"));
