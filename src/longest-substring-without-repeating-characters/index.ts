export function longestSubstringWithoutRepeatingCharacters(s: string): number {
  let leftPoint = 0,
    rightPoint = 0, // 右指针，初始值为 -1，相当于字符串的左边界的左侧，还没有开始移动
    result = 0

  const windowSet = new Set() // 可以理解为一个滑动窗口的集合，记录每个字符是否出现过

  for (rightPoint; rightPoint < s.length; rightPoint++) {
    const char = s[rightPoint]

    //判断窗口中是否有重复元素，一直到没有重复字符
    while (windowSet.has(char)) {
      windowSet.delete(s[leftPoint]) //删除窗口最左边字符
      leftPoint++ //左指针右移
    }
    windowSet.add(char)
    result = Math.max(result, rightPoint - leftPoint + 1) // 更新窗口长度最大值
  }

  return result
}
