Topic Link :  [https://leetcode.cn/problems/move-zeroes/](https://leetcode.cn/problems/move-zeroes/)

## 解题思路 

### moveZeroes

1. 单指针，收集非零数
2. 把非0数全部往数组左边移动
3. 收集完非零数后，后面全置为0
   

### moveZeroes2

1. 双指针，前指针指数组第0位，后指针指数组最后位
2. 开始循环，如果循环到0则删除并在数组末尾添加0
3. 当前指针大于等于后指针，循环结束