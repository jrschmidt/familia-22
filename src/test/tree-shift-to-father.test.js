import { test, describe, expect } from 'vitest'

import { familyTreeData } from '../family-tree-data.js'
import { viewModelInit, treeShiftToFather } from '../view-model-functions.js'

describe('treeShiftToFather function', () => {

  test('generates rows of people pair arrays with people in correct shifted position', () => {
    let viewModelData = viewModelInit(familyTreeData, 'p0001', 5)
    viewModelData = treeShiftToFather(viewModelData, familyTreeData)
    expect(viewModelData.rows[0][0][0]).toEqual('p0002')

    expect(viewModelData.rows[1][0][0]).toEqual('p0003')
    expect(viewModelData.rows[1][0][1]).toEqual('p0004')

    expect(viewModelData.rows[2][0][0]).toEqual('p0005')
    expect(viewModelData.rows[2][0][1]).toEqual('p0006')
    expect(viewModelData.rows[2][1][0]).toEqual('p0007')
    expect(viewModelData.rows[2][1][1]).toEqual('p0008')

    expect(viewModelData.rows[3][0][0]).toEqual('p0009')
    expect(viewModelData.rows[3][0][1]).toEqual('p0010')
    expect(viewModelData.rows[3][1][0]).toEqual('p0011')
    expect(viewModelData.rows[3][1][1]).toEqual('p0012')
    expect(viewModelData.rows[3][2][0]).toEqual('p0013')
    expect(viewModelData.rows[3][2][1]).toEqual('p0014')
    expect(viewModelData.rows[3][3][0]).toEqual('p0015')
    expect(viewModelData.rows[3][3][1]).toEqual('p0016')

    expect(viewModelData.rows[4][0][0]).toEqual('p0501')
    expect(viewModelData.rows[4][0][1]).toEqual('p0502')
    expect(viewModelData.rows[4][1][0]).toEqual('p0503')
    expect(viewModelData.rows[4][1][1]).toEqual('p0504')
    expect(viewModelData.rows[4][2][0]).toEqual('p0505')
    expect(viewModelData.rows[4][2][1]).toEqual('p0506')
    expect(viewModelData.rows[4][3][0]).toEqual('p0507')
    expect(viewModelData.rows[4][3][1]).toEqual('p0508')
    expect(viewModelData.rows[4][4][0]).toEqual('p0509')
    expect(viewModelData.rows[4][4][1]).toEqual('p0510')
    expect(viewModelData.rows[4][5][0]).toEqual('p0511')
    expect(viewModelData.rows[4][5][1]).toEqual('p0512')
    expect(viewModelData.rows[4][6][0]).toEqual('p0513')
    expect(viewModelData.rows[4][6][1]).toEqual('p0514')
    expect(viewModelData.rows[4][7][0]).toEqual('p0515')
    expect(viewModelData.rows[4][7][1]).toEqual('p0516')
  })

  test('correctly generates flattened array of updated people pair data', () => {
    let viewModelData = viewModelInit(familyTreeData, 'p0001', 5)
    viewModelData = treeShiftToFather(viewModelData, familyTreeData)

    expect(viewModelData.pairObjects.length).toEqual(16)

    expect(viewModelData.pairObjects[0]).toEqual(
      {
        pairClass: 'singleton gen0root moving',
        people: ['p0002']
      }
    )

    expect(viewModelData.pairObjects[1]).toEqual(
      {
        pairClass: 'normal gen1pair0 moving',
        people: ['p0003', 'p0004']
      }
    )

    expect(viewModelData.pairObjects[2]).toEqual(
      {
        pairClass: 'normal gen2pair0 moving',
        people: ['p0005', 'p0006']
      }
    )

    expect(viewModelData.pairObjects[3]).toEqual(
      {
        pairClass: 'normal gen2pair1 moving',
        people: ['p0007', 'p0008']
      }
    )

    expect(viewModelData.pairObjects[4]).toEqual(
      {
        pairClass: 'normal gen3pair0 moving',
        people: ['p0009', 'p0010']
      }
    )

    expect(viewModelData.pairObjects[5]).toEqual(
      {
        pairClass: 'normal gen3pair1 moving',
        people: ['p0011', 'p0012']
      }
    )

    expect(viewModelData.pairObjects[6]).toEqual(
      {
        pairClass: 'normal gen3pair2 moving',
        people: ['p0013', 'p0014']
      }
    )

    expect(viewModelData.pairObjects[7]).toEqual(
      {
        pairClass: 'normal gen3pair3 moving',
        people: ['p0015', 'p0016']
      }
    )

    expect(viewModelData.pairObjects[8]).toEqual(
      {
        pairClass: 'compressed gen4pair0',
        people: ['p0501', 'p0502']
      }
    )

    expect(viewModelData.pairObjects[9]).toEqual(
      {
        pairClass: 'compressed gen4pair1',
        people: ['p0503', 'p0504']
      }
    )

    expect(viewModelData.pairObjects[10]).toEqual(
      {
        pairClass: 'compressed gen4pair2',
        people: ['p0505', 'p0506']
      }
    )

    expect(viewModelData.pairObjects[11]).toEqual(
      {
        pairClass: 'compressed gen4pair3',
        people: ['p0507', 'p0508']
      }
    )

    expect(viewModelData.pairObjects[12]).toEqual(
      {
        pairClass: 'compressed gen4pair4',
        people: ['p0509', 'p0510']
      }
    )

    expect(viewModelData.pairObjects[13]).toEqual(
      {
        pairClass: 'compressed gen4pair5',
        people: ['p0511', 'p0512']
      }
    )

    expect(viewModelData.pairObjects[14]).toEqual(
      {
        pairClass: 'compressed gen4pair6',
        people: ['p0513', 'p0514']
      }
    )

    expect(viewModelData.pairObjects[15]).toEqual(
      {
        pairClass: 'compressed gen4pair7',
        people: ['p0515', 'p0516']
      }
    )

    expect(viewModelData.pairObjects[16]).toEqual(
      {
        pairClass: 'singleton leaving',
        people: ['p0001']
      }
    )

    expect(viewModelData.pairObjects[17]).toEqual(
      {
        pairClass: 'normal leaving',
        people: ['p0018', 'p0019']
      }
    )

    expect(viewModelData.pairObjects[18]).toEqual(
      {
        pairClass: 'normal leaving',
        people: ['p0020', 'p0021']
      }
    )

    expect(viewModelData.pairObjects[19]).toEqual(
      {
        pairClass: 'normal leaving',
        people: ['p0022', 'p0023']
      }
    )

    expect(viewModelData.pairObjects[20]).toEqual(
      {
        pairClass: 'compressed leaving',
        people: ['p0024', 'p0025']
      }
    )

    expect(viewModelData.pairObjects[21]).toEqual(
      {
        pairClass: 'compressed leaving',
        people: ['p0026', 'p0027']
      }
    )

    expect(viewModelData.pairObjects[22]).toEqual(
      {
        pairClass: 'compressed leaving',
        people: ['p0028', 'p0029']
      }
    )

    expect(viewModelData.pairObjects[23]).toEqual(
      {
        pairClass: 'compressed leaving',
        people: ['p0030', 'p0031']
      }
    )

  })
})
