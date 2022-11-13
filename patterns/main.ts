function printPattern(): void {
    for (let i = 5; i >= 1; i--) {
        let str = ''
        for (let j = i; j >= 1; j--) {
            if (i - j > 0) {
                str += ' '
            } else {
                str += '*'
            }
        }
        console.log(str)
    }
}

// ******
//  *****
//   ****
//    ***
//     **
//      *

printPattern()
