import { describe, expect, it } from 'vitest'
import { longestConsecutive, longestConsecutive2 } from '.'

describe('最长连续序列', () => {
  it('example1', () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4)
    expect(longestConsecutive2([100, 4, 200, 1, 3, 2])).toBe(4)
  })

  it('example2', () => {
    expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9)
    expect(longestConsecutive2([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9)
  })

  it('example3', () => {
    expect(longestConsecutive([1, 2, 0, 1])).toBe(3)
    expect(longestConsecutive2([1, 2, 0, 1])).toBe(3)
  })
})
