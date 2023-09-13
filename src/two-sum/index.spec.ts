//link: https://leetcode.cn/problems/two-sum/

import { describe, expect, it } from 'vitest'
import { twoSum } from '.'

describe('求数组中的两数之和', () => {
  it('example1', () => {
    expect(twoSum([2, 7, 11, 15], 9).toString()).toBe([0, 1].toString())
  })

  it('example2', () => {
    expect(twoSum([3, 2, 4], 6).toString()).toBe([1, 2].toString())
  })

  it('元素不能重复计算', () => {
    expect(twoSum([3, 3], 6).toString()).toBe([0, 1].toString())
  })
})
