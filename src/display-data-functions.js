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
    row.generation = index,
    row.people = []
    return row
  })

  fillTree(
    treeData,
    displayData,
    rootPersonId,
    0,
    0,
    generations - 1
  )

  displayData.result = successStatus
  return displayData
}


export const fillTree = (
  treeData,
  displayData,
  rootPerson,
  rootGeneration,
  rootPersonIndexInRow,
  endGeneration
) => {
  displayData.rows[rootGeneration].people.push(rootPerson)

  if (rootGeneration != endGeneration) {
    fillTree(
      treeData,
      displayData,
      treeData[rootPerson].fatherId,
      rootGeneration + 1,
      displayData.rows[rootGeneration + 1].length,
      endGeneration
    )

    fillTree(
      treeData,
      displayData,
      treeData[rootPerson].motherId,
      rootGeneration + 1,
      displayData.rows[rootGeneration + 1].length,
      endGeneration
    )

  }
}
