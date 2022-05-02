import { test, describe, expect } from 'vitest'

import { groupArrayElementsIntoPairs } from '../view-model-functions.js'

describe('groupArrayElementsIntoPairs function', () => {

test('converts array to array of paired elements in subarrays', () => {
  let inputArray = ['p0001']
  let resultArray = groupArrayElementsIntoPairs(inputArray)
  expect(resultArray).toStrictEqual( [ ['p0001'] ] )

  inputArray = ['p0002' ,'p0017']
  resultArray = groupArrayElementsIntoPairs(inputArray)
  expect(resultArray).toStrictEqual( [ ['p0002', 'p0017'] ] )

  inputArray = ['p0003' ,'p0004' , 'p0018', 'p0019']
  resultArray = groupArrayElementsIntoPairs(inputArray)
  expect(resultArray).toStrictEqual( [ ['p0003', 'p0004'], ['p0018', 'p0019'] ] )

  inputArray = ['p0005', 'p0006', 'p0007', 'p0008', 'p0020', 'p0021', 'p0022', 'p0023']
  resultArray = groupArrayElementsIntoPairs(inputArray)
  expect(resultArray).toStrictEqual( [ ['p0005', 'p0006'], ['p0007', 'p0008'], ['p0020', 'p0021'], ['p0022', 'p0023'] ] )
})

})
