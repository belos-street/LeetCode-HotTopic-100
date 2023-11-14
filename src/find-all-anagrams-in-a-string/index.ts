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
  const result: number[] = [] // 存放结果的数组
  const count: number[] = new Array(26).fill(0) // 用于统计字符出现次数的数组

  // 统计字符串 p 中各个字符的出现次数
  for (let i = 0; i < p.length; i++) {
    const index = p.charCodeAt(i) - 97 // 将字符转换为在 count 数组中的索引（a 对应 0，b 对应 1，依此类推）
    count[index]++ // 统计出现次数
  }

  let windowStart = 0, // 滑动窗口的起始位置
    windowEnd = 0 // 滑动窗口的结束位置

  let pLength = p.length
  // 使用滑动窗口遍历字符串 s
  while (windowEnd < s.length) {
    const charEnd = s.charCodeAt(windowEnd) - 97 // 当前窗口结束位置的字符转换为索引
    count[charEnd] > 0 && pLength--
    count[charEnd]-- // 将当前字符从统计数组中减一
    windowEnd++ // 结束位置右移一位

    pLength === 0 && result.push(windowStart) // 如果 pLength 等于 0，表示找到了一个字母异位词，将起始位置加入结果数组

    // 如果窗口大小等于 p 的长度，需要移动窗口的起始位置
    if (windowEnd - windowStart === p.length) {
      const charStart = s.charCodeAt(windowStart) - 97 // 当前窗口起始位置的字符转换为索引
      count[charStart] >= 0 && pLength++ // 如果起始位置字符在 p 中，则 pLength 加一
      count[charStart]++ // 将起始位置字符的统计加一
      windowStart++ // 起始位置右移一位
    }
  }

  return result // 返回结果数组
}
