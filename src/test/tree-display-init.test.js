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

  test('creates array of row data', () => {
    let displayData = treeDisplayInit(treeData, 'p0001', 5)
    expect(displayData.rows.length).toEqual(5)
  })

  test('gives each row a status of "normal"', () => {
    let displayData = treeDisplayInit(treeData, 'p0001', 5)
    expect(displayData.rows[1].status).toEqual('normal')
    expect(displayData.rows[4].status).toEqual('normal')
  })

  test('sets generation property of each row', () => {
    let displayData = treeDisplayInit(treeData, 'p0001', 5)
    expect(displayData.rows[0].generation).toEqual(0)
    expect(displayData.rows[3].generation).toEqual(3)
  })

  test('correctly generates entire tree of display data', () => {
    let displayData = treeDisplayInit(treeData, 'p0001', 5)
    expect(displayData.rows[0].people[0]).toEqual('p0001')
    expect(displayData.rows[1].people[0]).toEqual('p0002')
    expect(displayData.rows[1].people[1]).toEqual('p0017')
    expect(displayData.rows[2].people[0]).toEqual('p0003')
    expect(displayData.rows[2].people[1]).toEqual('p0004')
    expect(displayData.rows[2].people[2]).toEqual('p0018')
    expect(displayData.rows[2].people[3]).toEqual('p0019')
    expect(displayData.rows[3].people[0]).toEqual('p0005')
    expect(displayData.rows[3].people[1]).toEqual('p0006')
    expect(displayData.rows[3].people[2]).toEqual('p0007')
    expect(displayData.rows[3].people[3]).toEqual('p0008')
    expect(displayData.rows[3].people[4]).toEqual('p0020')
    expect(displayData.rows[3].people[5]).toEqual('p0021')
    expect(displayData.rows[3].people[6]).toEqual('p0022')
    expect(displayData.rows[3].people[7]).toEqual('p0023')
    expect(displayData.rows[4].people[0]).toEqual('p0009')
    expect(displayData.rows[4].people[1]).toEqual('p0010')
    expect(displayData.rows[4].people[2]).toEqual('p0011')
    expect(displayData.rows[4].people[3]).toEqual('p0012')
    expect(displayData.rows[4].people[4]).toEqual('p0013')
    expect(displayData.rows[4].people[5]).toEqual('p0014')
    expect(displayData.rows[4].people[6]).toEqual('p0015')
    expect(displayData.rows[4].people[7]).toEqual('p0016')
    expect(displayData.rows[4].people[8]).toEqual('p0024')
    expect(displayData.rows[4].people[9]).toEqual('p0025')
    expect(displayData.rows[4].people[10]).toEqual('p0026')
    expect(displayData.rows[4].people[11]).toEqual('p0027')
    expect(displayData.rows[4].people[12]).toEqual('p0028')
    expect(displayData.rows[4].people[13]).toEqual('p0029')
    expect(displayData.rows[4].people[14]).toEqual('p0030')
    expect(displayData.rows[4].people[15]).toEqual('p0031')
  })

})
