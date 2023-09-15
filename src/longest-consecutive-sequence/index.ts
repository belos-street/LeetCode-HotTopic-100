export function longestConsecutive(nums: number[]): number {
  if (nums.length <= 1) return nums.length

  const numbers = nums.sort((a, b) => a - b)

  let record = 1,
    maxRecord = 1
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === numbers[i - 1]) continue

    if (numbers[i] - 1 === numbers[i - 1]) {
      ++record > maxRecord && maxRecord++
    } else {
      record = 1
    }
  }

  return maxRecord
}

export function longestConsecutive2(nums: number[]): number {
  let num_set = new Set<number>(nums)

  let maxRecord = 0

  for (const item of num_set) {
    if (num_set.has(item - 1)) continue //只有当一个数是连续序列的第一个数的情况下才会进入内层循环

    let currentNum = item,
      record = 1

    //内层循环中匹配连续序列中的数
    while (num_set.has(currentNum + 1)) {
      currentNum++ //循环条件
      record++
    }
    record > maxRecord && (maxRecord = record)
  }

  return maxRecord
}
