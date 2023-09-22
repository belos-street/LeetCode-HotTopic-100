export function maxArea(height: number[]): number {
  let leftPoint = 0,
    rightPoint = height.length - 1

  let maxAreaNum = 0
  while (leftPoint < rightPoint) {
    const area = Math.min(height[leftPoint], height[rightPoint]) * (rightPoint - leftPoint)
    if (maxAreaNum < area) maxAreaNum = area
    height[leftPoint] < height[rightPoint] ? leftPoint++ : rightPoint--
  }

  return maxAreaNum
}
