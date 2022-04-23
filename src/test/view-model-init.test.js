import { test, describe, expect } from 'vitest'

import { familyTreeData } from '../family-tree-data.js'
import { viewModelInit } from '../view-model-functions.js'

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

  test('copies simple parameters to result', () => {
    let viewModelData = viewModelInit(familyTreeData, 'p0001', 5)
    expect(viewModelData.generationsDisplayed).toEqual(5)
    expect(viewModelData.displayRootPersonId).toBe('p0001')
  })

  test('correctly generates the array of people pair data', () => {
    let viewModelData = viewModelInit(familyTreeData, 'p0001', 5)

    expect(viewModelData.pairObjects.length).toBe(24)

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen0root',
        classes: ['singleton', 'gen0root'],
        people: ['p0001']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen1pair0',
        classes: ['normal', 'gen1pair0'],
        people: ['p0002', 'p0017']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen2pair0',
        classes: ['normal', 'gen2pair0'],
        people: ['p0003', 'p0004']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen2pair1',
        classes: ['normal', 'gen2pair1'],
        people: ['p0018', 'p0019']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen3pair0',
        classes: ['normal', 'gen3pair0'],
        people: ['p0005', 'p0006']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen3pair1',
        classes: ['normal', 'gen3pair1'],
        people: ['p0007', 'p0008']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen3pair2',
        classes: ['normal', 'gen3pair2'],
        people: ['p0020', 'p0021']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen3pair3',
        classes: ['normal', 'gen3pair3'],
        people: ['p0022', 'p0023']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair0',
        classes: ['compressed', 'gen4pair0'],
        people: ['p0009', 'p0010']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair1',
        classes: ['compressed', 'gen4pair1'],
        people: ['p0011', 'p0012']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair2',
        classes: ['compressed', 'gen4pair2'],
        people: ['p0013', 'p0014']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair3',
        classes: ['compressed', 'gen4pair3'],
        people: ['p0015', 'p0016']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair4',
        classes: ['compressed', 'gen4pair4'],
        people: ['p0024', 'p0025']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair5',
        classes: ['compressed', 'gen4pair5'],
        people: ['p0026', 'p0027']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair6',
        classes: ['compressed', 'gen4pair6'],
        people: ['p0028', 'p0029']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair7',
        classes: ['compressed', 'gen4pair7'],
        people: ['p0030', 'p0031']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'ghost0',
        classes: ['ghost', 'ghost0'],
        people: []
      }
    )
    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'ghost1',
        classes: ['ghost', 'ghost1'],
        people: []
      }
    )
    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'ghost2',
        classes: ['ghost', 'ghost2'],
        people: []
      }
    )
    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'ghost3',
        classes: ['ghost', 'ghost3'],
        people: []
      }
    )
    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'ghost4',
        classes: ['ghost', 'ghost4'],
        people: []
      }
    )
    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'ghost5',
        classes: ['ghost', 'ghost5'],
        people: []
      }
    )
    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'ghost6',
        classes: ['ghost', 'ghost6'],
        people: []
      }
    )
    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'ghost7',
        classes: ['ghost', 'ghost7'],
        people: []
      }
    )
  })

  test('correctly generates array of connector objects', () => {
    let viewModelData = viewModelInit(familyTreeData, 'p0001', 5)
    expect(viewModelData.connectorClasses.length).toBe(15)
    expect(viewModelData.connectorClasses[0]).toBe('straight-singleton parents-of-0-0')
    expect(viewModelData.connectorClasses[1]).toBe('left-w5 parents-of-1-0')
    expect(viewModelData.connectorClasses[2]).toBe('right-w5 parents-of-1-1')
    expect(viewModelData.connectorClasses[3]).toBe('left-w3 parents-of-2-0')
    expect(viewModelData.connectorClasses[4]).toBe('right-w3 parents-of-2-1')
    expect(viewModelData.connectorClasses[5]).toBe('left-w3 parents-of-2-2')
    expect(viewModelData.connectorClasses[6]).toBe('right-w3 parents-of-2-3')
    expect(viewModelData.connectorClasses[7]).toBe('straight-skinny parents-of-3-0')
    expect(viewModelData.connectorClasses[8]).toBe('straight-skinny parents-of-3-1')
    expect(viewModelData.connectorClasses[9]).toBe('straight-skinny parents-of-3-2')
    expect(viewModelData.connectorClasses[10]).toBe('straight-skinny parents-of-3-3')
    expect(viewModelData.connectorClasses[11]).toBe('straight-skinny parents-of-3-4')
    expect(viewModelData.connectorClasses[12]).toBe('straight-skinny parents-of-3-5')
    expect(viewModelData.connectorClasses[13]).toBe('straight-skinny parents-of-3-6')
    expect(viewModelData.connectorClasses[14]).toBe('straight-skinny parents-of-3-7')
  })
})
