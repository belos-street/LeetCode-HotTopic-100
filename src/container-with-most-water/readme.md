
Topic Link :  [https://leetcode.cn/problems/container-with-most-water/](https://leetcode.cn/problems/container-with-most-water/)

## 解题思路 

### containerWithMostWater

​	设两指针 i , j ，指向的水槽板高度分别为 h[i] , h[j] ，此状态下水槽面积为 S(i,j) 。由于可容纳水的高度由两板中的 短板 决定，因此可得如下 面积公式 ：

$$
S(i,j)=min(h[i],h[j])×(j−i)
$$
![](https://pic.leetcode-cn.com/1628780627-VtSmcP-Picture0.png)

在每个状态下，无论长板或短板向中间收窄一格，都会导致水槽 底边宽度 −1 变短：

- 若向内 移动短板 ，水槽的短板 min(h[i],h[j]) **可能变大**，因此下个水槽的面积 **可能增大** 。

- 若向内 移动长板 ，水槽的短板 min(h[i],h[j]) **不变或变小**，因此下个水槽的面积 **一定变小** 。

因此，初始化双指针分列水槽左右两端，循环每轮将短板向内移动一格，并更新面积最大值，直到两指针相遇时跳出；即可获得最大面积。

#### 算法流程：

1. 初始化： 双指针 iii , jjj 分列水槽左右两端；

2. 循环收窄： 直至双指针相遇时跳出；

      a. 更新面积最大值 resresres ；

      b. 选定两板高度中的短板，向中间收窄一格；

3. 返回值： 返回面积最大值 resresres 即可；

​    -- by [Krahets](https://leetcode.cn/u/jyd/)
