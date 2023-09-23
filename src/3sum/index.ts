export function threeSum(nums: number[]): number[][] {
  const result: number[][] = []
  nums.sort((a, b) => a - b) //排序

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let j = i + 1,
      k = nums.length - 1

    /** 两处优化
     * i与i+1 i+2 对应数组元素 加起来已经大于零了，就没必要循环了
     * i与k k-1 对应数组元素 加起来小于0，跳出当前循环
     */
    if (nums[i] + nums[i + 1] + nums[i + 2] > 0) break
    if (nums[i] + nums[k] + nums[k - 1] < 0) continue

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k]
      if (sum > 0) {
        k--
      } else if (sum < 0) {
        j++
      } else {
        result.push([nums[i], nums[j], nums[k]])
        j++

        //如果j k有连续重复的需要跳过，不用重复添加
        while (j < k && nums[j] === nums[j - 1]) j++
        while (j < k && nums[k] === nums[k + 1]) k++
      }
    }
  }
  return result
}
