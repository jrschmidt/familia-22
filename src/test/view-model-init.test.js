import { test, describe, expect } from 'vitest'

import { familyTreeData } from '../family-tree-data.js'
import { viewModelInit } from '../display-data-functions.js'

describe('viewModelInit function', () => {

  test('returns a viewModelData object', () => {
    let viewModelData = viewModelInit(familyTreeData, 'p0001', 5)
    expect(viewModelData).toBeTruthy()
  })

  // (Temporary until values other than 5 are implemented)
  test('gives message when `generations` parameter doesnt equal 5', () => {
    let viewModelData = viewModelInit(familyTreeData, 'p0001', 5)
    expect(viewModelData.result).toBe('success')

    viewModelData = viewModelInit(familyTreeData, 'p0001', 4)
    expect(viewModelData.result).toBe('fail')

    viewModelData = viewModelInit(familyTreeData, 'p0001', 2)
    expect(viewModelData.result).toBe('fail')

  })

  test('returns `displayStatus` of "normal" when initializing display data', () => {
    let viewModelData = viewModelInit(familyTreeData, 'p0001', 5)
    expect(viewModelData.displayStatus).toBe('normal')
  })

  test('copies simple parameters to result', () => {
    let viewModelData = viewModelInit(familyTreeData, 'p0001', 5)
    expect(viewModelData.generationsDisplayed).toEqual(5)
    expect(viewModelData.displayRootPersonId).toBe('p0001')
  })

  test('creates array of row data', () => {
    let viewModelData = viewModelInit(familyTreeData, 'p0001', 5)
    expect(viewModelData.rows.length).toEqual(5)
  })

  test('correctly places people pair arrays in rows', () => {
    let viewModelData = viewModelInit(familyTreeData, 'p0001', 5)
    expect(viewModelData.rows[0][0][0]).toEqual('p0001')
    expect(viewModelData.rows[1][0][0]).toEqual('p0002')
    expect(viewModelData.rows[1][0][1]).toEqual('p0017')
    expect(viewModelData.rows[2][0][0]).toEqual('p0003')
    expect(viewModelData.rows[2][0][1]).toEqual('p0004')
    expect(viewModelData.rows[2][1][0]).toEqual('p0018')
    expect(viewModelData.rows[2][1][1]).toEqual('p0019')
    expect(viewModelData.rows[3][0][0]).toEqual('p0005')
    expect(viewModelData.rows[3][0][1]).toEqual('p0006')
    expect(viewModelData.rows[3][1][0]).toEqual('p0007')
    expect(viewModelData.rows[3][1][1]).toEqual('p0008')
    expect(viewModelData.rows[3][2][0]).toEqual('p0020')
    expect(viewModelData.rows[3][2][1]).toEqual('p0021')
    expect(viewModelData.rows[3][3][0]).toEqual('p0022')
    expect(viewModelData.rows[3][3][1]).toEqual('p0023')
    expect(viewModelData.rows[4][0][0]).toEqual('p0009')
    expect(viewModelData.rows[4][0][1]).toEqual('p0010')
    expect(viewModelData.rows[4][1][0]).toEqual('p0011')
    expect(viewModelData.rows[4][1][1]).toEqual('p0012')
    expect(viewModelData.rows[4][2][0]).toEqual('p0013')
    expect(viewModelData.rows[4][2][1]).toEqual('p0014')
    expect(viewModelData.rows[4][3][0]).toEqual('p0015')
    expect(viewModelData.rows[4][3][1]).toEqual('p0016')
    expect(viewModelData.rows[4][4][0]).toEqual('p0024')
    expect(viewModelData.rows[4][4][1]).toEqual('p0025')
    expect(viewModelData.rows[4][5][0]).toEqual('p0026')
    expect(viewModelData.rows[4][5][1]).toEqual('p0027')
    expect(viewModelData.rows[4][6][0]).toEqual('p0028')
    expect(viewModelData.rows[4][6][1]).toEqual('p0029')
    expect(viewModelData.rows[4][7][0]).toEqual('p0030')
    expect(viewModelData.rows[4][7][1]).toEqual('p0031')
  })

  test('correctly generates flattened array of people pair data', () => {
    let viewModelData = viewModelInit(familyTreeData, 'p0001', 5)

    expect(viewModelData.pairObjects[0]).toEqual({
      pairLocation: 'singleton gen0root',
      people: ['p0001']}
    )

    expect(viewModelData.pairObjects[1]).toEqual({
      pairLocation: 'normal gen1pair0',
      people: ['p0002', 'p0017']}
    )

    expect(viewModelData.pairObjects[2]).toEqual({
      pairLocation: 'normal gen2pair0',
      people: ['p0003', 'p0004']}
    )

    expect(viewModelData.pairObjects[3]).toEqual({
      pairLocation: 'normal gen2pair1',
      people: ['p0018', 'p0019']}
    )

    expect(viewModelData.pairObjects[4]).toEqual({
      pairLocation: 'normal gen3pair0',
      people: ['p0005', 'p0006']}
    )

    expect(viewModelData.pairObjects[5]).toEqual({
      pairLocation: 'normal gen3pair1',
      people: ['p0007', 'p0008']}
    )

    expect(viewModelData.pairObjects[6]).toEqual({
      pairLocation: 'normal gen3pair2',
      people: ['p0020', 'p0021']}
    )

    expect(viewModelData.pairObjects[7]).toEqual({
      pairLocation: 'normal gen3pair3',
      people: ['p0022', 'p0023']}
    )

    expect(viewModelData.pairObjects[8]).toEqual({
      pairLocation: 'compressed gen4pair0',
      people: ['p0009', 'p0010']}
    )

    expect(viewModelData.pairObjects[9]).toEqual({
      pairLocation: 'compressed gen4pair1',
      people: ['p0011', 'p0012']}
    )

    expect(viewModelData.pairObjects[10]).toEqual({
      pairLocation: 'compressed gen4pair2',
      people: ['p0013', 'p0014']}
    )

    expect(viewModelData.pairObjects[11]).toEqual({
      pairLocation: 'compressed gen4pair3',
      people: ['p0015', 'p0016']}
    )

    expect(viewModelData.pairObjects[12]).toEqual({
      pairLocation: 'compressed gen4pair4',
      people: ['p0024', 'p0025']}
    )

    expect(viewModelData.pairObjects[13]).toEqual({
      pairLocation: 'compressed gen4pair5',
      people: ['p0026', 'p0027']}
    )

    expect(viewModelData.pairObjects[14]).toEqual({
      pairLocation: 'compressed gen4pair6',
      people: ['p0028', 'p0029']}
    )

    expect(viewModelData.pairObjects[15]).toEqual({
      pairLocation: 'compressed gen4pair7',
      people: ['p0030', 'p0031']}
    )
  })

})
