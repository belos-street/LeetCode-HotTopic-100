import { describe, expect, it } from 'vitest'
import { twoSum } from '.'

describe('求数组中的两数之和', () => {
  it('example1', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toMatchObject([0, 1])
  })

  it('example2', () => {
    expect(twoSum([3, 2, 4], 6)).toMatchObject([1, 2])
  })

  it('元素不能重复计算', () => {
    expect(twoSum([3, 3], 6)).toMatchObject([0, 1])
  })
})
