function strWithout3a3b(a: number, b: number): string {
    let res = ""
    while (a > 0 || b > 0) {
        let writeA = false
        let l = res.length
        if (l >= 2 && res[l - 1] === res[l - 2]) {
            if (res[l - 1] === 'b') {
                writeA = true
            }
        } else {
            if (a >= b) {
                writeA = true
            }
        }
        if (writeA) {
            a--
            res += 'a'
        } else {
            b--
            res += 'b'
        }
    }
    return res
}

console.log(strWithout3a3b(15, 13))
