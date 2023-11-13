/** bad
 * 暴力破解，直接超时
 */
export function findAllAnagramsInAString_bad(s: string, p: string): number[] {
  const sortStr = (str: string) => str.split('').sort().join('')

  const result: number[] = [],
    pInfo = sortStr(p)

  for (let point = 0; point < s.length - p.length + 1; point++) {
    let windowInfo = sortStr(s.slice(point, point + p.length))
    windowInfo === pInfo && result.push(point)
  }

  return result
}

/** 优化算法 frist
 * 利用计数排序的方法来判断两个字符串是否是异位串，这种方法具有更高的效率
 *  例如 'caaz' 换算为
 *    [2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
 */
export function findAllAnagramsInAString_bad2(s: string, p: string): number[] {
  const result: number[] = []

  // 初始化字符计数数组,计数排序
  const count: number[] = new Array(26).fill(0)
  for (let i = 0; i < p.length; i++) {
    const index = p.charCodeAt(i) - 97 // 将字符映射到 0-25 的索引
    count[index]++
  }

  for (let point = 0; point < s.length - p.length + 1; point++) {
    let window = s.slice(point, point + p.length)
    areAnagrams(window) && result.push(point)
  }

  return result

  function areAnagrams(str: string) {
    const newCount = [...count]

    // 遍历字符串，逐个减少对应字符的计数
    for (let i = 0; i < str.length; i++) {
      const index = str.charCodeAt(i) - 97 // 将字符映射到 0-25 的索引
      newCount[index]--

      // 如果某个字符的计数小于 0，说明两个字符串的字符不一致
      if (newCount[index] < 0) return false
    }

    // 检查所有字符的计数是否为 0
    for (let i = 0; i < newCount.length; i++) {
      if (newCount[i] !== 0) return false
    }

    return true
  }
}

/**
 *
 * 避免重复计算：在每次遍历子串时，可以避免重复计算子串中每个字符的计数。可以在循环开始前计算第一个子串的字符计数，然后在后续的子串中，根据前一个子串的计数来更新当前子串的计数，从而避免重复计算。
 * 使用滑动窗口：可以使用滑动窗口技巧来避免多次创建子串。滑动窗口可以通过移动起始索引和结束索引来实现对子串的快速遍历，从而避免创建大量的子串对象。
 * 提前结束遍历：当确定某个子串不是异位串时，可以提前结束当前子串的遍历，从而节省时间
 */
export function findAllAnagramsInAString(s: string, p: string): number[] {
  const result: number[] = []
  const count: number[] = new Array(26).fill(0)

  for (let i = 0; i < p.length; i++) {
    const index = p.charCodeAt(i) - 97
    count[index]++
  }

  let windowStart = 0,
    windowEnd = 0,
    pLength = p.length

  while (windowEnd < s.length) {
    const charEnd = s.charCodeAt(windowEnd) - 97
    if (count[charEnd] > 0) {
      pLength--
    }
    count[charEnd]--
    windowEnd++

    pLength === 0 && result.push(windowStart)

    if (windowEnd - windowStart === p.length) {
      const charStart = s.charCodeAt(windowStart) - 97
      count[charStart] >= 0 && pLength++
      count[charStart]++
      windowStart++
    }
  }

  return result
}
