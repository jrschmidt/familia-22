import { test, describe, expect } from 'vitest'

import { treeData } from '../tree-data.js'
import { treeDisplayInit } from '../display-data-functions.js'

describe('treeDisplayInit function', () => {

  test('returns a displayData object', () => {
    let displayData = treeDisplayInit(treeData, 'p0001', 5)
    console.log(displayData)
    expect(displayData).toBeTruthy()
  })

  // (Temporary until values other than 5 are implemented)
  test('gives message when "generations" parameter doesnt equal 5', () => {
    let displayData = treeDisplayInit(treeData, 'p0001', 5)
    console.log(displayData)
    expect(displayData.result).toBe('success')

    displayData = treeDisplayInit(treeData, 'p0001', 4)
    console.log(displayData)
    expect(displayData.result).toBe('fail')

    displayData = treeDisplayInit(treeData, 'p0001', 2)
    console.log(displayData)
    expect(displayData.result).toBe('fail')

  })

})
