export const treeDisplayInit = (treeData, rootPersonId, generations) => {
  let displayData = {}
  let successStatus = 'success'

  if (generations != 5) successStatus = 'fail'

  displayData.generationsDisplayed = generations
  displayData.displayRootPersonId = rootPersonId
  displayData.displayStatus = 'normal'

  const empties = [ {},{},{},{},{} ]
  displayData.rows = empties.map((row, index) => {
    row.status = 'normal'
    row.generation = index
    return row
  })

  // displayData.rows[0][0] = rootPersonId

  displayData.result = successStatus
  return displayData
}
