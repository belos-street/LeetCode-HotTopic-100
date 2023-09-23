
Topic Link :  [https://leetcode.cn/problems/3sum/](https://leetcode.cn/problems/3sum/)

## 解题思路 

### 3sum

1. 对元素组进行排序

2. 设置i j k三个指针，i从0开始，j = i + 1，k = nums.length - 1

3. 循环遍历 

   a. 当nums[i] + nums[j] + nums[k] > 0时，k指针向左移动，

   b. 当nums[i] + nums[j] + nums[k] < 0时，j指针向右移动，

   c. 当nums[i] + nums[j] + nums[k] < 0时,  元素收集，k指针向左移动

#### 参考：https://leetcode.cn/problems/3sum/solutions/1968332/shuang-zhi-zhen-xiang-bu-ming-bai-yi-ge-pno55/

