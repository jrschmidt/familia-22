import { test, describe, expect } from 'vitest'

import { pairArrayElements } from '../display-data-functions.js'

describe('pairArrayElements function', () => {

  test('returns empty array if number of elements is not even', () => {
    const oddArray = ['p0001' ,'p0002' ,'p0003' ,'p0004' ,'p0005']
    let resultArray = pairArrayElements(oddArray)
    expect(resultArray).toStrictEqual( [] )
  })

test('converts array to array of paired elements in subarrays', () => {
  let inputArray = ['p0002' ,'p0017']
  let resultArray = pairArrayElements(inputArray)
  expect(resultArray).toStrictEqual( [ ['p0002', 'p0017'] ] )

  inputArray = ['p0003' ,'p0004' , 'p0018', 'p0019']
  resultArray = pairArrayElements(inputArray)
  expect(resultArray).toStrictEqual( [ ['p0003', 'p0004'], ['p0018', 'p0019'] ] )

  inputArray = ['p0005', 'p0006', 'p0007', 'p0008', 'p0020', 'p0021', 'p0022', 'p0023']
  resultArray = pairArrayElements(inputArray)
  expect(resultArray).toStrictEqual( [ ['p0005', 'p0006'], ['p0007', 'p0008'], ['p0020', 'p0021'], ['p0022', 'p0023'] ] )
})

})
