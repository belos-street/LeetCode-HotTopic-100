/** bad */
export function findAllAnagramsInAString(s: string, p: string): number[] {
  const result: number[] = [],
    pInfo = countKeys(p)

  for (let point = 0; point < s.length - p.length + 1; point++) {
    let windowInfo = countKeys(s.slice(point, point + p.length))
    objEqual(pInfo, windowInfo) && result.push(point)
  }

  return result

  type Obj = Record<string, number>

  function countKeys(str: string) {
    const resultObj: Obj = {}
    for (let i = 0; i < str.length; i++) {
      const char = str[i]
      char in resultObj ? resultObj[char]++ : (resultObj[char] = 1)
    }
    return resultObj
  }

  function objEqual(obj1: Obj, obj2: Obj) {
    const keys1 = Object.keys(obj1),
      keys2 = Object.keys(obj2)
    if (keys1.length !== keys2.length) return false
    for (let key of keys1) {
      if (obj1[key] !== obj2[key]) return false
    }
    return true
  }
}
