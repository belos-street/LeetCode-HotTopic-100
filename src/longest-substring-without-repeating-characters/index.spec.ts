import { describe, expect, it } from 'vitest'
import { longestSubstringWithoutRepeatingCharacters } from '.'

describe('无重复字符的最长子串', () => {
  it('example1', () => {
    expect(longestSubstringWithoutRepeatingCharacters('abcabcbb')).toBe(3)
  })

  it('example2', () => {
    expect(longestSubstringWithoutRepeatingCharacters('bbbbb')).toBe(1)
  })

  it('example3', () => {
    expect(longestSubstringWithoutRepeatingCharacters('pwwkew')).toBe(3)
  })
})
