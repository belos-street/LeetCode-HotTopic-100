const url = await question('enter algorithm url: ')
const name = await question('enter algorithm name: ')
const rankNumber = await question('enter rank number: ')
const toCamelCaseUrl = toCamelCase(url)

await fs.mkdir(path.join('src', url))

const indexFileContent = `
export function ${toCamelCaseUrl}() {

}
`
await fs.writeFile(path.join('src', url, 'index.ts'), indexFileContent)

const specFileContent = `
import { describe, expect, it } from 'vitest'
import { ${toCamelCaseUrl} } from '.'

describe('${name}', () => {
  it('example1', () => {
    expect(${toCamelCaseUrl}()).toMatchObject()
  })

})
`
await fs.writeFile(path.join('src', url, 'index.spec.ts'), specFileContent)

const readmeFileContent = `
Topic Link :  [https://leetcode.cn/problems/${url}/](https://leetcode.cn/problems/${url}/)

## 解题思路 

### ${toCamelCaseUrl}

1. xxx
`
await fs.writeFile(path.join('src', url, 'readme.md'), readmeFileContent)


const rootReadmeFileContent = `${rankNumber}. [${name} ${url}](https://github.com/belos-street/LeetCode-HotTopic-100/tree/main/src/${url})`
await fs.appendFile(path.join('README.md'), rootReadmeFileContent)

/**
 * 
 * @param {string} str 
 */
function toCamelCase (str) {
  return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
}