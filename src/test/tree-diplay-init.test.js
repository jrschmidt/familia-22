import { test, describe, expect } from 'vitest'

import { treeData } from '../tree-data.js'
import { treeDisplayInit } from '../display-data-functions.js'

describe('treeDisplayInit function', () => {

  test('returns a displayData object', () => {
    let displayData = treeDisplayInit(treeData, 'p0001', 5)
    expect(displayData).toBeTruthy()
  })

  // (Temporary until values other than 5 are implemented)
  test('gives message when `generations` parameter doesnt equal 5', () => {
    let displayData = treeDisplayInit(treeData, 'p0001', 5)
    expect(displayData.result).toBe('success')

    displayData = treeDisplayInit(treeData, 'p0001', 4)
    expect(displayData.result).toBe('fail')

    displayData = treeDisplayInit(treeData, 'p0001', 2)
    expect(displayData.result).toBe('fail')

  })

  test('returns `displayStatus` of "normal" when initializing display data', () => {
    let displayData = treeDisplayInit(treeData, 'p0001', 5)
    expect(displayData.displayStatus).toBe('normal')
  })

  test('copies simple parameters to result', () => {
    let displayData = treeDisplayInit(treeData, 'p0001', 5)
    expect(displayData.generationsDisplayed).toEqual(5)
    expect(displayData.displayRootPersonId).toBe('p0001')
  })

  test('places root display person in row 0', () => {
    let displayData = treeDisplayInit(treeData, 'p0001', 5)
    expect(displayData.row0Id[0]).toEqual('p0001')
  })

})
