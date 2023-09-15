import { describe, expect, it } from 'vitest'
import { moveZeroes } from '.'

describe('移动零', () => {
  it('example1', () => {
    expect(moveZeroes([0, 1, 0, 3, 12])).toMatchObject([1, 3, 12, 0, 0])
  })

  it('example2', () => {
    expect(moveZeroes([0])).toMatchObject([0])
  })
})
