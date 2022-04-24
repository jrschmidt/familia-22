import { test, describe, expect } from 'vitest'

import { familyTreeData } from '../family-tree-data.js'
import { viewModelInit, treeShiftToChild } from '../view-model-functions.js'

describe('treeShiftToChild function with male root person', () => {

  test('generates rows of people pair arrays with people in correct shifted position (male root)', () => {
    let viewModelData = viewModelInit(familyTreeData, 'p0001', 5)
    viewModelData = treeShiftToChild(familyTreeData)
    expect(viewModelData.rows[0][0][0]).toEqual('p0999')

    expect(viewModelData.rows[1][0][0]).toEqual('p0001')
    expect(viewModelData.rows[1][0][1]).toEqual('p7777')

    expect(viewModelData.rows[2][0][0]).toEqual('p0002')
    expect(viewModelData.rows[2][0][1]).toEqual('p0017')
    expect(viewModelData.rows[2][1][0]).toEqual('p0701')
    expect(viewModelData.rows[2][1][1]).toEqual('p0702')

    expect(viewModelData.rows[3][0][0]).toEqual('p0003')
    expect(viewModelData.rows[3][0][1]).toEqual('p0004')
    expect(viewModelData.rows[3][1][0]).toEqual('p0018')
    expect(viewModelData.rows[3][1][1]).toEqual('p0019')
    expect(viewModelData.rows[3][2][0]).toEqual('p0703')
    expect(viewModelData.rows[3][2][1]).toEqual('p0704')
    expect(viewModelData.rows[3][3][0]).toEqual('p0705')
    expect(viewModelData.rows[3][3][1]).toEqual('p0706')

    expect(viewModelData.rows[4][0][0]).toEqual('p0009')
    expect(viewModelData.rows[4][0][1]).toEqual('p0010')
    expect(viewModelData.rows[4][1][0]).toEqual('p0011')
    expect(viewModelData.rows[4][1][1]).toEqual('p0012')
    expect(viewModelData.rows[4][2][0]).toEqual('p0013')
    expect(viewModelData.rows[4][2][1]).toEqual('p0014')
    expect(viewModelData.rows[4][3][0]).toEqual('p0015')
    expect(viewModelData.rows[4][3][1]).toEqual('p0016')
    expect(viewModelData.rows[4][4][0]).toEqual('p0707')
    expect(viewModelData.rows[4][4][1]).toEqual('p0708')
    expect(viewModelData.rows[4][5][0]).toEqual('p0709')
    expect(viewModelData.rows[4][5][1]).toEqual('p0710')
    expect(viewModelData.rows[4][6][0]).toEqual('p0711')
    expect(viewModelData.rows[4][6][1]).toEqual('p0712')
    expect(viewModelData.rows[4][7][0]).toEqual('p0713')
    expect(viewModelData.rows[4][7][1]).toEqual('p0714')
  })

  test('correctly generates flattened array of updated people pair data (male root)', () => {
    let viewModelData = viewModelInit(familyTreeData, 'p0001', 5)
    viewModelData = treeShiftToChild(familyTreeData)

    expect(viewModelData.pairObjects.length).toEqual(16)

    expect(viewModelData.pairObjects[0]).toEqual(
      {
        pairClass: 'singleton gen0root moving',
        people: ['p0999]
      }
    )

    expect(viewModelData.pairObjects[1]).toEqual(
      {
        pairClass: 'normal gen1pair0 moving',
        people: ['p0001', 'p7777']
      }
    )

    expect(viewModelData.pairObjects[2]).toEqual(
      {
        pairClass: 'normal gen2pair0 moving',
        people: ['p0002', 'p0017']
      }
    )

    expect(viewModelData.pairObjects[3]).toEqual(
      {
        pairClass: 'normal gen2pair1 moving',
        people: ['p0701', 'p0702']
      }
    )

    expect(viewModelData.pairObjects[4]).toEqual(
      {
        pairClass: 'normal gen3pair0 moving',
        people: ['p0003', 'p0004']
      }
    )

    expect(viewModelData.pairObjects[5]).toEqual(
      {
        pairClass: 'normal gen3pair1 moving',
        people: ['p0018', 'p0019']
      }
    )

    expect(viewModelData.pairObjects[6]).toEqual(
      {
        pairClass: 'normal gen3pair2 moving',
        people: ['p0703', 'p0704']
      }
    )

    expect(viewModelData.pairObjects[7]).toEqual(
      {
        pairClass: 'normal gen3pair3 moving',
        people: ['p0705', 'p0706']
      }
    )

    expect(viewModelData.pairObjects[8]).toEqual(
      {
        pairClass: 'compressed gen4pair0',
        people: ['p0009', 'p010']
      }
    )

    expect(viewModelData.pairObjects[9]).toEqual(
      {
        pairClass: 'compressed gen4pair1',
        people: ['p011', 'p012']
      }
    )

    expect(viewModelData.pairObjects[10]).toEqual(
      {
        pairClass: 'compressed gen4pair2',
        people: ['p0013', 'p0014']
      }
    )

    expect(viewModelData.pairObjects[11]).toEqual(
      {
        pairClass: 'compressed gen4pair3',
        people: ['p0015', 'p0016']
      }
    )

    expect(viewModelData.pairObjects[12]).toEqual(
      {
        pairClass: 'compressed gen4pair4',
        people: ['p0707', 'p0708']
      }
    )

    expect(viewModelData.pairObjects[13]).toEqual(
      {
        pairClass: 'compressed gen4pair5',
        people: ['p0709', 'p0710']
      }
    )

    expect(viewModelData.pairObjects[14]).toEqual(
      {
        pairClass: 'compressed gen4pair6',
        people: ['p0711', 'p0712']
      }
    )

    expect(viewModelData.pairObjects[15]).toEqual(
      {
        pairClass: 'compressed gen4pair7',
        people: ['p0713', 'p0714']
      }
    )

    expect(viewModelData.pairObjects[16]).toEqual(
      {
        pairClass: 'singleton leaving',
        people: ['p0009', 'p0010']
      }
    )

    expect(viewModelData.pairObjects[17]).toEqual(
      {
        pairClass: 'normal leaving',
        people: ['p0011', 'p0012']
      }
    )

    expect(viewModelData.pairObjects[18]).toEqual(
      {
        pairClass: 'normal leaving',
        people: ['p0013', 'p0014']
      }
    )

    expect(viewModelData.pairObjects[19]).toEqual(
      {
        pairClass: 'normal leaving',
        people: ['p0015', 'p0016']
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


describe('treeShiftToChild function with female root person', () => {

  test('generates rows of people pair arrays with people in correct shifted position (female root)', () => {
    let viewModelData = viewModelInit(familyTreeData, 'p0001', 5)

    // Alter view model data to make root person a female
    viewModelData.rows[0][0][0] = 'p8888'
    viewModelData.pairs[0].people = ['p8888']

    viewModelData = treeShiftToChild(familyTreeData)
    expect(viewModelData.rows[0][0][0]).toEqual('p0999')

    expect(viewModelData.rows[1][0][0]).toEqual('p7777')
    expect(viewModelData.rows[1][0][1]).toEqual('p8888')


    expect(viewModelData.rows[2][0][0]).toEqual('p0701')
    expect(viewModelData.rows[2][0][1]).toEqual('p0702')
    expect(viewModelData.rows[2][1][0]).toEqual('p0002')
    expect(viewModelData.rows[2][1][1]).toEqual('p0017')


    expect(viewModelData.rows[3][0][0]).toEqual('p0703')
    expect(viewModelData.rows[3][0][1]).toEqual('p0704')
    expect(viewModelData.rows[3][1][0]).toEqual('p0705')
    expect(viewModelData.rows[3][1][1]).toEqual('p0706')
    expect(viewModelData.rows[3][2][0]).toEqual('p0003')
    expect(viewModelData.rows[3][2][1]).toEqual('p0004')
    expect(viewModelData.rows[3][3][0]).toEqual('p0018')
    expect(viewModelData.rows[3][3][1]).toEqual('p0019')


    expect(viewModelData.rows[4][0][0]).toEqual('p0707')
    expect(viewModelData.rows[4][0][1]).toEqual('p0708')
    expect(viewModelData.rows[4][1][0]).toEqual('p0709')
    expect(viewModelData.rows[4][1][1]).toEqual('p0710')
    expect(viewModelData.rows[4][2][0]).toEqual('p0711')
    expect(viewModelData.rows[4][2][1]).toEqual('p0712')
    expect(viewModelData.rows[4][3][0]).toEqual('p0713')
    expect(viewModelData.rows[4][3][1]).toEqual('p0714')
    expect(viewModelData.rows[4][4][0]).toEqual('p0009')
    expect(viewModelData.rows[4][4][1]).toEqual('p0010')
    expect(viewModelData.rows[4][5][0]).toEqual('p0011')
    expect(viewModelData.rows[4][5][1]).toEqual('p0012')
    expect(viewModelData.rows[4][6][0]).toEqual('p0013')
    expect(viewModelData.rows[4][6][1]).toEqual('p0014')
    expect(viewModelData.rows[4][7][0]).toEqual('p0015')
    expect(viewModelData.rows[4][7][1]).toEqual('p0016')
  })

  test('correctly generates flattened array of updated people pair data (female root)', () => {
    let viewModelData = viewModelInit(familyTreeData, 'p0001', 5)

    // Alter view model data to make root person a female
    viewModelData.rows[0][0][0] = 'p8888'
    viewModelData.pairs[0].people = ['p8888']

    viewModelData = treeShiftToChild(familyTreeData)

    expect(viewModelData.pairObjects.length).toEqual(16)

    expect(viewModelData.pairObjects[0]).toEqual(
      {
        pairClass: 'singleton gen0root moving',
        people: ['p0999']
      }
    )

    expect(viewModelData.pairObjects[1]).toEqual(
      {
        pairClass: 'normal gen1pair0 moving',
        people: ['p7777', 'p8888']
      }
    )

    expect(viewModelData.pairObjects[2]).toEqual(
      {
        pairClass: 'normal gen2pair0 moving',
        people: ['p0701', 'p0702']
      }
    )

    expect(viewModelData.pairObjects[3]).toEqual(
      {
        pairClass: 'normal gen2pair1 moving',
        people: ['p0002', 'p0017']
      }
    )

    expect(viewModelData.pairObjects[4]).toEqual(
      {
        pairClass: 'normal gen3pair0 moving',
        people: ['p0703', 'p0704']
      }
    )

    expect(viewModelData.pairObjects[5]).toEqual(
      {
        pairClass: 'normal gen3pair1 moving',
        people: ['p0705', 'p0706']
      }
    )

    expect(viewModelData.pairObjects[6]).toEqual(
      {
        pairClass: 'normal gen3pair2 moving',
        people: ['p0003', 'p0004']
      }
    )

    expect(viewModelData.pairObjects[7]).toEqual(
      {
        pairClass: 'normal gen3pair3 moving',
        people: ['p0018', 'p0019']
      }
    )

    expect(viewModelData.pairObjects[8]).toEqual(
      {
        pairClass: 'compressed gen4pair0',
        people: ['p0707', 'p0708']
      }
    )

    expect(viewModelData.pairObjects[9]).toEqual(
      {
        pairClass: 'compressed gen4pair1',
        people: ['p0709', 'p0710']
      }
    )

    expect(viewModelData.pairObjects[10]).toEqual(
      {
        pairClass: 'compressed gen4pair2',
        people: ['p0711', 'p0712']
      }
    )

    expect(viewModelData.pairObjects[11]).toEqual(
      {
        pairClass: 'compressed gen4pair3',
        people: ['p0713', 'p0714']
      }
    )

    expect(viewModelData.pairObjects[12]).toEqual(
      {
        pairClass: 'compressed gen4pair4',
        people: ['p0009', 'p0010']
      }
    )

    expect(viewModelData.pairObjects[13]).toEqual(
      {
        pairClass: 'compressed gen4pair5',
        people: ['p0011', 'p0012']
      }
    )

    expect(viewModelData.pairObjects[14]).toEqual(
      {
        pairClass: 'compressed gen4pair6',
        people: ['p0013', 'p0014']
      }
    )

    expect(viewModelData.pairObjects[15]).toEqual(
      {
        pairClass: 'compressed gen4pair7',
        people: ['p0015', 'p0016']
      }
    )

    expect(viewModelData.pairObjects[16]).toEqual(
      {
        pairClass: 'singleton leaving',
        people: ['p0009', 'p0010']
      }
    )

    expect(viewModelData.pairObjects[17]).toEqual(
      {
        pairClass: 'normal leaving',
        people: ['p0011', 'p0012']
      }
    )

    expect(viewModelData.pairObjects[18]).toEqual(
      {
        pairClass: 'normal leaving',
        people: ['p0013', 'p0014']
      }
    )

    expect(viewModelData.pairObjects[19]).toEqual(
      {
        pairClass: 'normal leaving',
        people: ['p0015', 'p0016']
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
