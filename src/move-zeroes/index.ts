/**
 * 单指针
 * 收集非零数
 * 把非0数全部往数组左边移动
 * 收集完非零数后，后面全置为0
 */
export function moveZeroes(nums: number[]): number[] {
  let point = 0 //定义收集不是0的数的指针

  /**开始收集不是零的数 */
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[point] = nums[i] //收集不是0的数
      point++
    }
  }

  /** 收集完非零数后，后面都是0 */
  for (let i = point; i < nums.length; i++) {
    nums[i] = 0
  }

  return nums
}

/** 双指针 */
export function moveZeroes2(nums: number[]): number[] {
  let frontPoint: number = 0, //前指针
    backPoint: number = nums.length - 1 //后指针

  while (frontPoint < backPoint) {
    if (nums[frontPoint] === 0) {
      nums.splice(frontPoint, 1) //循环到0则把0删除
      nums.push(0) //后面加个0
      backPoint-- //后指针--
    } else {
      frontPoint++ //不是0不做操作前指针++
    }
  }

  return nums
}
