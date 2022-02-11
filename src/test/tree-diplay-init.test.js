import { it, describe, expect } from 'vitest'

import { treeData } from '../tree-data.js'
import { treeDisplayInit } from '../display-data-functions.js'

describe('treeDisplayInit function', () => {
  it('returns a displayData object', () => {
    const displayData = treeDisplayInit(treeData, 'p0001', 5)
    console.log('result:')
    console.log(displayData)
    expect(displayData).toBeTruthy()
  })

})
