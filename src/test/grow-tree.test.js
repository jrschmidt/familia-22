import { test, describe, expect } from 'vitest'

import { familyTreeData } from '../family-tree-data.js'
import { growTree } from '../display-data-functions.js'

// This set of sample data represents what the state of the display data
// might be before the growTree() function is called.
const getPartialDisplayData = () => {
  const rows = [
    {
      status: 'normal',
      generation: 4,
      people: []
    },

    {
      status: 'normal',
      generation: 3,
      people: []
    },

    {
      status: 'normal',
      generation: 2,
      people: []
    },

    {
      status: 'normal',
      generation: 1,
      people: []
    },

    {
      status: 'normal',
      generation: 0,
      people: []
    }
  ]

  let data = {
    generationsDisplayed: 5,
    displayRootPersonId: 'p0001',
    displayStatus: 'normal',
    rows: rows
  }

  return data
}

describe('growTree function', () => {

  test('sets correct root person', () => {
    let displayData = getPartialDisplayData()
    growTree(familyTreeData, displayData, 'p0001', 0, 4)

    expect(displayData.rows[4].status).toEqual('normal')
    expect(displayData.rows[4].generation).toEqual(0)
    expect(displayData.rows[4].people[0][0]).toEqual('p0001')
  })

  test('correctly sets father and mother of root person', () => {
    let displayData = getPartialDisplayData()
    growTree(familyTreeData, displayData, 'p0001', 0, 4)

    expect(displayData.rows[3].people[0][0]).toEqual('p0002')
    expect(displayData.rows[3].people[0][1]).toEqual('p0017')
  })

  test('correctly sets older generations', () => {
    let displayData = getPartialDisplayData()
    growTree(familyTreeData, displayData, 'p0001', 0, 4)

    expect(displayData.rows[2].people[0][0]).toEqual('p0003')
    expect(displayData.rows[2].people[0][1]).toEqual('p0004')
    expect(displayData.rows[2].people[1][0]).toEqual('p0018')
    expect(displayData.rows[2].people[1][1]).toEqual('p0019')
    expect(displayData.rows[1].people[0][0]).toEqual('p0005')
    expect(displayData.rows[1].people[0][1]).toEqual('p0006')
    expect(displayData.rows[1].people[1][0]).toEqual('p0007')
    expect(displayData.rows[1].people[1][1]).toEqual('p0008')
    expect(displayData.rows[1].people[2][0]).toEqual('p0020')
    expect(displayData.rows[1].people[2][1]).toEqual('p0021')
    expect(displayData.rows[1].people[3][0]).toEqual('p0022')
    expect(displayData.rows[1].people[3][1]).toEqual('p0023')
    expect(displayData.rows[0].people[0][0]).toEqual('p0009')
    expect(displayData.rows[0].people[0][1]).toEqual('p0010')
    expect(displayData.rows[0].people[1][0]).toEqual('p0011')
    expect(displayData.rows[0].people[1][1]).toEqual('p0012')
    expect(displayData.rows[0].people[2][0]).toEqual('p0013')
    expect(displayData.rows[0].people[2][1]).toEqual('p0014')
    expect(displayData.rows[0].people[3][0]).toEqual('p0015')
    expect(displayData.rows[0].people[3][1]).toEqual('p0016')
    expect(displayData.rows[0].people[4][0]).toEqual('p0024')
    expect(displayData.rows[0].people[4][1]).toEqual('p0025')
    expect(displayData.rows[0].people[5][0]).toEqual('p0026')
    expect(displayData.rows[0].people[5][1]).toEqual('p0027')
    expect(displayData.rows[0].people[6][0]).toEqual('p0028')
    expect(displayData.rows[0].people[6][1]).toEqual('p0029')
    expect(displayData.rows[0].people[7][0]).toEqual('p0030')
    expect(displayData.rows[0].people[7][1]).toEqual('p0031')
  })

})
