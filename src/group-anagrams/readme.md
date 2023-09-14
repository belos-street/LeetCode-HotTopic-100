Topic Link :  [ https://leetcode.cn/problems/group-anagrams/ ](https://leetcode.cn/problems/group-anagrams/)

## 解题方法 

### groupAnagrams

1. 用map储存字母相同的单词
2. 将每一个单词的字母排序后用作key，保证相同字母的单词key相同，只需要遍历一次数组就可以把所有元素放入对应key中

### groupAnagrams2

1. 用质数表示26个字母，把字符串的各个字母相乘，这样可保证字母异位词的乘积必定是相等的
2. 用map存储

