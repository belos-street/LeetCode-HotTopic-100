import { describe, expect, it } from 'vitest'
import { groupAnagrams } from '.'
import { groupAnagrams2 } from './groupAnagrams2'

describe('字母异位词分组', () => {
  it('example1', () => {
    expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toMatchObject([
      ['eat', 'tea', 'ate'],
      ['tan', 'nat'],
      ['bat']
    ])

    expect(groupAnagrams2(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toMatchObject([
      ['bat'],
      ['eat', 'tea', 'ate'],
      ['tan', 'nat']
    ])
  })

  it('example2', () => {
    expect(groupAnagrams([''])).toMatchObject([['']])
    expect(groupAnagrams2([''])).toMatchObject([['']])
  })

  it('example3', () => {
    expect(groupAnagrams(['a'])).toMatchObject([['a']])

    console.log(groupAnagrams2(['ac', 'd', 'ca']))
    expect(groupAnagrams2(['a'])).toMatchObject([['a']])
  })
})
