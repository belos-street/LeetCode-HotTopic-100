export function twoSum(nums: number[], target: number) {
  const numsMap = new Map<number, number>()
  for (let index = 0; index < nums.length; index++) {
    const key = target - nums[index]
    if (numsMap.has(key)) {
      return [numsMap.get(key), index]
    } else {
      numsMap.set(nums[index], index)
    }
  }
  return []
}
