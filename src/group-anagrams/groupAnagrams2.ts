export function groupAnagrams2(strs: string[]): string[][] {
  const letterMap = {
    a: 2,
    b: 3,
    c: 5,
    d: 7,
    e: 11,
    f: 13,
    g: 17,
    h: 19,
    i: 23,
    j: 29,
    k: 31,
    l: 37,
    m: 41,
    n: 43,
    o: 47,
    p: 53,
    q: 59,
    r: 61,
    s: 67,
    t: 71,
    u: 73,
    v: 79,
    w: 83,
    x: 89,
    y: 97,
    z: 101
  }

  const map: { [key in number]: string[] } = {}
  for (let i = 0; i < strs.length; i++) {
    const countKey = strs[i].split('').reduce((pre, item) => (letterMap as any)[item] + pre, 0)
    !(countKey in map) && (map[countKey] = [])
    map[countKey].push(strs[i])
  }

  const result = []
  for (const key in map) {
    result.push(map[key])
  }

  return result
}
