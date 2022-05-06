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

    expect(viewModelData.pairObjects.length).toBe(40)

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen0root',
        classes: ['gen0root', 'static', 'singleton',],
        people: ['p0001']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen1pair0',
        classes: ['gen1pair0', 'static', 'normal'],
        people: ['p0002', 'p0017']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen2pair0',
        classes: ['gen2pair0', 'static', 'normal'],
        people: ['p0003', 'p0004']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen2pair1',
        classes: ['gen2pair1', 'static', 'normal'],
        people: ['p0018', 'p0019']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen3pair0',
        classes: ['gen3pair0', 'static', 'normal'],
        people: ['p0005', 'p0006']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen3pair1',
        classes: ['gen3pair1', 'static', 'normal'],
        people: ['p0007', 'p0008']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen3pair2',
        classes: ['gen3pair2', 'static', 'normal'],
        people: ['p0020', 'p0021']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen3pair3',
        classes: ['gen3pair3', 'static', 'normal'],
        people: ['p0022', 'p0023']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair0',
        classes: ['gen4pair0', 'static', 'compressed'],
        people: ['p0009', 'p0010']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair1',
        classes: ['gen4pair1', 'static', 'compressed'],
        people: ['p0011', 'p0012']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair2',
        classes: ['gen4pair2', 'static', 'compressed'],
        people: ['p0013', 'p0014']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair3',
        classes: ['gen4pair3', 'static', 'compressed'],
        people: ['p0015', 'p0016']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair4',
        classes: ['gen4pair4', 'static', 'compressed'],
        people: ['p0024', 'p0025']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair5',
        classes: ['gen4pair5', 'static', 'compressed'],
        people: ['p0026', 'p0027']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair6',
        classes: ['gen4pair6', 'static', 'compressed'],
        people: ['p0028', 'p0029']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair7',
        classes: ['gen4pair7', 'static', 'compressed'],
        people: ['p0030', 'p0031']
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen0rootghost',
        classes: ['gen0root', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen1pair0ghost',
        classes: ['gen1pair0', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen2pair0ghost',
        classes: ['gen2pair0', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen2pair1ghost',
        classes: ['gen2pair1', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen3pair0ghost',
        classes: ['gen3pair0', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen3pair1ghost',
        classes: ['gen3pair1', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen3pair2ghost',
        classes: ['gen3pair2', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen3pair3ghost',
        classes: ['gen3pair3', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair0ghost',
        classes: ['gen4pair0', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair1ghost',
        classes: ['gen4pair1', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair2ghost',
        classes: ['gen4pair2', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair3ghost',
        classes: ['gen4pair3', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair4ghost',
        classes: ['gen4pair4', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair5ghost',
        classes: ['gen4pair5', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair6ghost',
        classes: ['gen4pair6', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'gen4pair7ghost',
        classes: ['gen4pair7', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'ghost0',
        classes: ['ghost0', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'ghost1',
        classes: ['ghost1', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'ghost2',
        classes: ['ghost2', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'ghost3',
        classes: ['ghost3', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'ghost4',
        classes: ['ghost4', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'ghost5',
        classes: ['ghost5', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'ghost6',
        classes: ['ghost6', 'ghost', 'no-show'],
        people: []
      }
    )

    expect(viewModelData.pairObjects).toContainEqual(
      {
        label: 'ghost7',
        classes: ['ghost7', 'ghost', 'no-show'],
        people: []
      }
    )
  })

  test('correctly generates array of connector objects', () => {
    let viewModelData = viewModelInit(familyTreeData, 'p0001', 5)
    expect(viewModelData.connectorClasses.length).toBe(15)
    expect(viewModelData.connectorClasses[0]).toBe('parents-of-0-0 straight-singleton')
    expect(viewModelData.connectorClasses[1]).toBe('parents-of-1-0 left-w5')
    expect(viewModelData.connectorClasses[2]).toBe('parents-of-1-1 right-w5')
    expect(viewModelData.connectorClasses[3]).toBe('parents-of-2-0 left-w3')
    expect(viewModelData.connectorClasses[4]).toBe('parents-of-2-1 right-w3')
    expect(viewModelData.connectorClasses[5]).toBe('parents-of-2-2 left-w3')
    expect(viewModelData.connectorClasses[6]).toBe('parents-of-2-3 right-w3')
    expect(viewModelData.connectorClasses[7]).toBe('parents-of-3-0 straight-skinny')
    expect(viewModelData.connectorClasses[8]).toBe('parents-of-3-1 straight-skinny')
    expect(viewModelData.connectorClasses[9]).toBe('parents-of-3-2 straight-skinny')
    expect(viewModelData.connectorClasses[10]).toBe('parents-of-3-3 straight-skinny')
    expect(viewModelData.connectorClasses[11]).toBe('parents-of-3-4 straight-skinny')
    expect(viewModelData.connectorClasses[12]).toBe('parents-of-3-5 straight-skinny')
    expect(viewModelData.connectorClasses[13]).toBe('parents-of-3-6 straight-skinny')
    expect(viewModelData.connectorClasses[14]).toBe('parents-of-3-7 straight-skinny')
  })
})
