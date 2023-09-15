Topic Link :  [ https://leetcode.cn/problems/longest-consecutive-sequence/ ](https://leetcode.cn/problems/longest-consecutive-sequence/)

## 解题思路 

### longestConsecutive

1. 将数组正序排序
2. 遍历数组，标记最长连续序列
   
时间复杂度：O(nlogn)

### longestConsecutive2

1. Set对数组去重
2. 遍历Set，只有当一个数是连续序列的第一个数的情况下才会进入内层循环
3. 内层循环中匹配连续序列中的数
   
时间复杂度：O(n)