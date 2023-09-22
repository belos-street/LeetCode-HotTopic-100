import { describe, expect, it } from 'vitest'
import { maxArea } from '.'

describe('盛最多水的容器', () => {
  it('example1', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49)
  })

  it('example2', () => {
    expect(maxArea([1, 1])).toBe(1)
  })
})
