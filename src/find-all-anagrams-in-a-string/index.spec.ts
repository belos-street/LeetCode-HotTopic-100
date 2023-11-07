import { describe, expect, it } from 'vitest'
import { findAllAnagramsInAString } from '.'

describe('找到字符串中所有字母异位词', () => {
  it('example1', () => {
    expect(findAllAnagramsInAString('cbaebabacd', 'abc')).toMatchObject([0, 6])
  })

  it('example2', () => {
    expect(findAllAnagramsInAString('abab', 'ab')).toMatchObject([0, 1, 2])
  })
})
