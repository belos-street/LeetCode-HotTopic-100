import { describe, expect, it } from 'vitest'
import { threeSum } from '.'

describe('三数之和', () => {
  it('example1', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toMatchObject([
      [-1, -1, 2],
      [-1, 0, 1]
    ])
  })

  it('example2', () => {
    expect(threeSum([0, 1, 1])).toMatchObject([])
  })

  it('example3', () => {
    expect(threeSum([0, 0, 0])).toMatchObject([[0, 0, 0]])
  })
})
