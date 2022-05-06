import { test, describe, expect } from 'vitest'

import { familyTreeData } from '../family-tree-data.js'
import { viewModelInit, treeShiftToMother } from '../view-model-functions.js'

describe('treeShiftToMother function', () => {

  test('generates rows of people pair arrays with people in correct shifted position', () => {
    let viewModelData = viewModelInit(familyTreeData, 'p0001', 5)
    viewModelData = treeShiftToMother(familyTreeData)
    expect(viewModelData.rows[0][0][0]).toEqual('p0017')

    expect(viewModelData.rows[1][0][0]).toEqual('p0018')
    expect(viewModelData.rows[1][0][1]).toEqual('p0019')

    expect(viewModelData.rows[2][0][0]).toEqual('p0020')
    expect(viewModelData.rows[2][0][1]).toEqual('p0021')
    expect(viewModelData.rows[2][1][0]).toEqual('p0022')
    expect(viewModelData.rows[2][1][1]).toEqual('p0023')

    expect(viewModelData.rows[3][0][0]).toEqual('p0024')
    expect(viewModelData.rows[3][0][1]).toEqual('p0025')
    expect(viewModelData.rows[3][1][0]).toEqual('p0026')
    expect(viewModelData.rows[3][1][1]).toEqual('p0027')
    expect(viewModelData.rows[3][2][0]).toEqual('p0028')
    expect(viewModelData.rows[3][2][1]).toEqual('p0029')
    expect(viewModelData.rows[3][3][0]).toEqual('p0030')
    expect(viewModelData.rows[3][3][1]).toEqual('p0031')

    expect(viewModelData.rows[4][0][0]).toEqual('p0517')
    expect(viewModelData.rows[4][0][1]).toEqual('p0518')
    expect(viewModelData.rows[4][1][0]).toEqual('p0519')
    expect(viewModelData.rows[4][1][1]).toEqual('p0520')
    expect(viewModelData.rows[4][2][0]).toEqual('p0521')
    expect(viewModelData.rows[4][2][1]).toEqual('p0522')
    expect(viewModelData.rows[4][3][0]).toEqual('p0523')
    expect(viewModelData.rows[4][3][1]).toEqual('p0524')
    expect(viewModelData.rows[4][4][0]).toEqual('p0525')
    expect(viewModelData.rows[4][4][1]).toEqual('p0526')
    expect(viewModelData.rows[4][5][0]).toEqual('p0527')
    expect(viewModelData.rows[4][5][1]).toEqual('p0528')
    expect(viewModelData.rows[4][6][0]).toEqual('p0529')
    expect(viewModelData.rows[4][6][1]).toEqual('p0530')
    expect(viewModelData.rows[4][7][0]).toEqual('p0531')
    expect(viewModelData.rows[4][7][1]).toEqual('p0532')
  })

  test('correctly generates flattened array of updated people pair data', () => {
    let viewModelData = viewModelInit(familyTreeData, 'p0001', 5)
    viewModelData = treeShiftToMother(familyTreeData)

    expect(viewModelData.pairObjects.length).toEqual(16)

    expect(viewModelData.pairObjects[0]).toEqual(
      {
        //  ***  ***  REPLACE WITH THE RE-ORDERED CLASS STRINGS FROM OTHER TESTS!!!!  ***  ***
        //  ***  ***  REPLACE WITH THE RE-ORDERED CLASS STRINGS FROM OTHER TESTS!!!!  ***  ***
        //  ***  ***  REPLACE WITH THE RE-ORDERED CLASS STRINGS FROM OTHER TESTS!!!!  ***  ***
        pairClass: 'singleton gen0root moving',
        people: ['p0017']
      }
    )

    expect(viewModelData.pairObjects[1]).toEqual(
      {
        pairClass: 'normal gen1pair0 moving',
        people: ['p0018', 'p0019']
      }
    )

    expect(viewModelData.pairObjects[2]).toEqual(
      {
        pairClass: 'normal gen2pair0 moving',
        people: ['p0020', 'p0021']
      }
    )

    expect(viewModelData.pairObjects[3]).toEqual(
      {
        pairClass: 'normal gen2pair1 moving',
        people: ['p0022', 'p0023']
      }
    )

    expect(viewModelData.pairObjects[4]).toEqual(
      {
        pairClass: 'normal gen3pair0 moving',
        people: ['p0024', 'p0025']
      }
    )

    expect(viewModelData.pairObjects[5]).toEqual(
      {
        pairClass: 'normal gen3pair1 moving',
        people: ['p0026', 'p0027']
      }
    )

    expect(viewModelData.pairObjects[6]).toEqual(
      {
        pairClass: 'normal gen3pair2 moving',
        people: ['p0028', 'p0029']
      }
    )

    expect(viewModelData.pairObjects[7]).toEqual(
      {
        pairClass: 'normal gen3pair3 moving',
        people: ['p0030', 'p0031']
      }
    )

    expect(viewModelData.pairObjects[8]).toEqual(
      {
        pairClass: 'compressed gen4pair0',
        people: ['p0517', 'p0518']
      }
    )

    expect(viewModelData.pairObjects[9]).toEqual(
      {
        pairClass: 'compressed gen4pair1',
        people: ['p0519', 'p0520']
      }
    )

    expect(viewModelData.pairObjects[10]).toEqual(
      {
        pairClass: 'compressed gen4pair2',
        people: ['p0521', 'p0522']
      }
    )

    expect(viewModelData.pairObjects[11]).toEqual(
      {
        pairClass: 'compressed gen4pair3',
        people: ['p0523', 'p0524']
      }
    )

    expect(viewModelData.pairObjects[12]).toEqual(
      {
        pairClass: 'compressed gen4pair4',
        people: ['p0525', 'p0526']
      }
    )

    expect(viewModelData.pairObjects[13]).toEqual(
      {
        pairClass: 'compressed gen4pair5',
        people: ['p0027', 'p0528']
      }
    )

    expect(viewModelData.pairObjects[14]).toEqual(
      {
        pairClass: 'compressed gen4pair6',
        people: ['p0529', 'p0530']
      }
    )

    expect(viewModelData.pairObjects[15]).toEqual(
      {
        pairClass: 'compressed gen4pair7',
        people: ['p0531', 'p0532']
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
        people: ['p0003', 'p0004']
      }
    )

    expect(viewModelData.pairObjects[18]).toEqual(
      {
        pairClass: 'normal leaving',
        people: ['p0005', 'p0006']
      }
    )

    expect(viewModelData.pairObjects[19]).toEqual(
      {
        pairClass: 'normal leaving',
        people: ['p0007', 'p0008']
      }
    )

    expect(viewModelData.pairObjects[20]).toEqual(
      {
        pairClass: 'compressed leaving',
        people: ['p0009', 'p0010']
      }
    )

    expect(viewModelData.pairObjects[21]).toEqual(
      {
        pairClass: 'compressed leaving',
        people: ['p0011', 'p0012']
      }
    )

    expect(viewModelData.pairObjects[22]).toEqual(
      {
        pairClass: 'compressed leaving',
        people: ['p0013', 'p0014']
      }
    )

    expect(viewModelData.pairObjects[23]).toEqual(
      {
        pairClass: 'compressed leaving',
        people: ['p0015', 'p0016']
      }
    )

  })
})
