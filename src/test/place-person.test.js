import { test, describe, expect } from 'vitest'

import { placePerson } from '../display-data-functions.js'

describe('placePerson function', () => {

  test('places element in a sub-array within the array if the array is empty', () => {
    let row = []
    placePerson(row, 'p0001')
    expect(row).toStrictEqual( [ ['p0001'] ] )
  })

  test('adds a second person id to the last sub-array if it only has one element', () => {
    let row = [ ['p0001'] ]
    placePerson(row, 'p0002')
    expect(row).toStrictEqual( [ ['p0001', 'p0002'] ] )

    row = [ ['p0001', 'p00002'], ['p0003', 'p00004'], ['p0005'] ]
    placePerson(row, 'p0006')
    expect(row).toStrictEqual( [ ['p0001', 'p00002'], ['p0003', 'p00004'], ['p0005', 'p0006'] ] )
  })

  test('creates a new sub-array with the new person id if last sub-array has two elements', () => {
    let row = [ ['p0007', 'p0008'] ]
    placePerson(row, 'p0009')
    expect(row).toStrictEqual( [ ['p0007', 'p0008'], ['p0009'] ] )

    row = [ ['p0007', 'p0008'], ['p0009', 'p0010'], ['p0011', 'p0012'] ]
    placePerson(row, 'p0013')
    expect(row).toStrictEqual( [ ['p0007', 'p0008'], ['p0009', 'p0010'], ['p0011', 'p0012'], ['p0013'] ] )
  })

})
