/** 双指针 前后 一次移动一个 记录面积 直至相等  */
export function maxArea(height: number[]): number {
  if (height.length < 2) return 0
  let leftPoint = 0,
    rightPoint = height.length - 1

  let maxAreaNum = 0
  while (leftPoint < rightPoint) {
    // /** 记录面积 */
    // areas.push(Math.min(height[leftPoint], height[rightPoint]) * (rightPoint - leftPoint))
    // /** 每次循环左右指针各移动一次 */
    // leftPoint % 2 === 0 ? leftPoint++ : rightPoint--
  }

  return maxAreaNum
}
