function minimumNotes(notes: number[], amount: number): number {
    let count = 0
    for (let i = notes.length - 1; i >= 0; i--) {
        if (amount >= notes[i]) {
            count += Math.trunc(amount / notes[i])
            amount %= notes[i]
        }
    }
    return count
}

console.log(minimumNotes([1, 2, 5, 10, 20, 50, 100], 785))