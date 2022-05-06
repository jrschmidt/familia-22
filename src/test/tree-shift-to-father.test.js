import { test, describe, expect } from 'vitest'

import { familyTreeData } from '../family-tree-data.js'
import { viewModelInit, treeShiftToFather } from '../view-model-functions.js'

describe('treeShiftToFather function', () => {

  test('generates rows of people pair arrays with people in correct shifted position', () => {
    let viewModelData = viewModelInit(familyTreeData, 'p0001', 5)
    viewModelData = treeShiftToFather(viewModelData, familyTreeData)
    // expect(viewModelData.rows[0][0][0]).toEqual('p0002')

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

    expect(viewModelData.pairObjects.length).toEqual(40)

    expect(viewModelData.pairObjects[0]).toEqual(
      {
        classes: ['gen0root', 'static', 'singleton', 'no-show'],
        people: ['p0002']
      }
    )

    expect(viewModelData.pairObjects[1]).toEqual(
      {
        classes: ['gen1pair0', 'static', 'normal', 'no-show'],
        people: ['p0003', 'p0004']
      }
    )

    expect(viewModelData.pairObjects[2]).toEqual(
      {
        classes: ['gen2pair0', 'static', 'normal', 'no-show'],
        people: ['p0005', 'p0006']
      }
    )

    expect(viewModelData.pairObjects[3]).toEqual(
      {
        classes: ['gen2pair1', 'static', 'normal', 'no-show'],
        people: ['p0007', 'p0008']
      }
    )

    expect(viewModelData.pairObjects[4]).toEqual(
      {
        classes: ['gen3pair0', 'static', 'normal', 'no-show'],
        people: ['p0009', 'p0010']
      }
    )

    expect(viewModelData.pairObjects[5]).toEqual(
      {
        classes: ['gen3pair1', 'static', 'normal', 'no-show'],
        people: ['p0011', 'p0012']
      }
    )

    expect(viewModelData.pairObjects[6]).toEqual(
      {
        classes: ['gen3pair2', 'static', 'normal', 'no-show'],
        people: ['p0013', 'p0014']
      }
    )

    expect(viewModelData.pairObjects[7]).toEqual(
      {
        classes: ['gen3pair3', 'static', 'normal', 'no-show'],
        people: ['p0015', 'p0016']
      }
    )

    expect(viewModelData.pairObjects[8]).toEqual(
      {
        classes: ['gen4pair0', 'static', 'compressed', 'no-show'],
        people: ['p0501', 'p0502']
      }
    )

    expect(viewModelData.pairObjects[9]).toEqual(
      {
        classes: ['gen4pair1', 'static', 'compressed', 'no-show'],
        people: ['p0503', 'p0504']
      }
    )

    expect(viewModelData.pairObjects[10]).toEqual(
      {
        classes: ['gen4pair2', 'static', 'compressed', 'no-show'],
        people: ['p0505', 'p0506']
      }
    )

    expect(viewModelData.pairObjects[11]).toEqual(
      {
        classes: ['gen4pair3', 'static', 'compressed', 'no-show'],
        people: ['p0507', 'p0508']
      }
    )

    expect(viewModelData.pairObjects[12]).toEqual(
      {
        classes: ['gen4pair4', 'static', 'compressed', 'no-show'],
        people: ['p0509', 'p0510']
      }
    )

    expect(viewModelData.pairObjects[13]).toEqual(
      {
        classes: ['gen4pair5', 'static', 'compressed', 'no-show'],
        people: ['p0511', 'p0512']
      }
    )

    expect(viewModelData.pairObjects[14]).toEqual(
      {
        classes: ['gen4pair6', 'static', 'compressed', 'no-show'],
        people: ['p0513', 'p0514']
      }
    )

    expect(viewModelData.pairObjects[15]).toEqual(
      {
        classes: ['gen4pair7', 'static', 'compressed', 'no-show'],
        people: ['p0515', 'p0516']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen0rootghost',
        classes: ['gen0root', 'ghost', 'fade'],
        people: ['p0001']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen1pair0ghost',
        classes: ['gen1pair0', 'ghost', 'move', 'to-gen0root', 'singleton'],
        people: ['p0002', 'p0017']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen2pair0ghost',
        classes: ['gen2pair0', 'ghost', 'move', 'to-gen1pair0', 'normal'],
        people: ['p0003', 'p0004']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen2pair1ghost',
        classes: ['gen2pair1', 'ghost', 'fade'],
        people: ['p0018', 'p0019']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen3pair0ghost',
        classes: ['gen3pair0', 'ghost', 'move', 'to-gen2pair0', 'normal'],
        people: ['p0005', 'p0006']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen3pair1ghost',
        classes: ['gen3pair1', 'ghost', 'move', 'to-gen2pair1', 'normal'],
        people: ['p0007', 'p0008']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen3pair2ghost',
        classes: ['gen3pair2', 'ghost', 'fade'],
        people: ['p0020', 'p0021']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen3pair3ghost',
        classes: ['gen3pair3', 'ghost', 'fade'],
        people: ['p0022', 'p0023']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair0ghost',
        classes: ['gen4pair0', 'ghost', 'move', 'to-gen3pair0', 'normal'],
        people: ['p0009', 'p0010']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair1ghost',
        classes: ['gen4pair1', 'ghost', 'move', 'to-gen3pair1', 'normal'],
        people: ['p0011', 'p0012']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair2ghost',
        classes: ['gen4pair2', 'ghost', 'move', 'to-gen3pair2', 'normal'],
        people: ['p0013', 'p0014']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair3ghost',
        classes: ['gen4pair3', 'ghost', 'move', 'to-gen3pair3', 'normal'],
        people: ['p0015', 'p0016']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair4ghost',
        classes: ['gen4pair4', 'ghost', 'fade'],
        people: ['p0024', 'p0025']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair5ghost',
        classes: ['gen4pair5', 'ghost', 'fade'],
        people: ['p0026', 'p0027']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair6ghost',
        classes: ['gen4pair6', 'ghost', 'fade'],
        people: ['p0028', 'p0029']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair7ghost',
        classes: ['gen4pair7', 'ghost', 'fade'],
        people: ['p0030', 'p0031']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'ghost0',
        classes: ['ghost0', 'ghost', 'enter', 'to-gen4pair0', 'compressed'],
        people: ['p0501', 'p0502']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'ghost1',
        classes: ['ghost1', 'ghost', 'enter', 'to-gen4pair1', 'compressed'],
        people: ['p0503', 'p0504']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'ghost2',
        classes: ['ghost2', 'ghost', 'enter', 'to-gen4pair2', 'compressed'],
        people: ['p0505', 'p0506']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'ghost3',
        classes: ['ghost3', 'ghost', 'enter', 'to-gen4pair3', 'compressed'],
        people: ['p0507', 'p0508']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'ghost4',
        classes: ['ghost4', 'ghost', 'enter', 'to-gen4pair4', 'compressed'],
        people: ['p0509', 'p0510']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'ghost5',
        classes: ['ghost5', 'ghost', 'enter', 'to-gen4pair5', 'compressed'],
        people: ['p0511', 'p0512']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'ghost6',
        classes: ['ghost6', 'ghost', 'enter', 'to-gen4pair6', 'compressed'],
        people: ['p0513', 'p0514']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'ghost7',
        classes: ['ghost7', 'ghost', 'enter', 'to-gen4pair7', 'compressed'],
        people: ['p0515', 'p0516']
      }
    )





  })
})
