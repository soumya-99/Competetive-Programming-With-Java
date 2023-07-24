// Input: points = [[1,1],[2,2],[3,3]]
// Output: 3

// Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
// Output: 4

function maxPoints(points: number[][]): number {
    let max: number = 0
    for (let i = 0; i < points.length; i++) {
        const map = new Map<number, number>()
        let duplicate: number = 1
        for (let j = i + 1; j < points.length; j++) {
            if (points[i][0] === points[j][0] && points[i][1] === points[j][1]) {
                duplicate++
            } else {
                const slope = getSlope(points[i], points[j])
                map.set(slope, (map.get(slope) || 0) + 1)
            }
        }
        max = Math.max(max, duplicate)
        for (const [_, count] of map) {
            max = Math.max(max, count + duplicate)
        }
    }
    return max
}

function getSlope(p1: number[], p2: number[]): number {
    if (p1[0] === p2[0]) {
        return Infinity
    }
    return (p1[1] - p2[1]) / (p1[0] - p2[0])
}

console.log(maxPoints([[1, 1], [2, 2], [3, 3]]))
console.log(maxPoints([[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]]))