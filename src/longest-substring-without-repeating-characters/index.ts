export function longestSubstringWithoutRepeatingCharacters(s: string): number {
  let leftPoint = 0,
    rightPoint = -1, // 右指针，初始值为 -1，相当于字符串的左边界的左侧，还没有开始移动
    result = 0

  const set = new Set(), // 哈希集合，记录每个字符是否出现过
    sLength = s.length

  for (leftPoint; leftPoint < sLength; leftPoint++) {
    // 左指针向右移动一格，移除一个字符
    leftPoint !== 0 && set.delete(s[leftPoint - 1])

    //右指针 + 1 不超过字符串长度 且 集合里面没有出现重复字符
    while (rightPoint + 1 < sLength && !set.has(s[rightPoint])) {
      rightPoint++ // 不断地移动右指针
      set.add(s[rightPoint])
    }

    //记录最长长度
    result = Math.max(result, rightPoint - leftPoint + 1)
  }

  return result
}
