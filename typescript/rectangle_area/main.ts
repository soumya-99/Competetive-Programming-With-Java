function computeArea(ax1: number, ay1: number, ax2: number, ay2: number, bx1: number, by1: number, bx2: number, by2: number): number {
    const x1 = Math.max(ax1, bx1)
    const y1 = Math.max(ay1, by1)
    const x2 = Math.min(ax2, bx2)
    const y2 = Math.min(ay2, by2)
    const overlap = Math.max(0, x2 - x1) * Math.max(0, y2 - y1)
    return (ax2 - ax1) * (ay2 - ay1) + (bx2 - bx1) * (by2 - by1) - overlap 
}

console.log(computeArea(-3, 0, 3, 4, 0, -1, 9, 2))
