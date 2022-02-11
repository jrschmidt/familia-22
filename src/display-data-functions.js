export const treeDisplayInit = (treeData, rootPersonId, generations) => {
  let displayData = {}
  let successStatus = 'success'

  if (generations != 5) successStatus = 'fail'

  displayData.generationsDisplayed = generations
  displayData.displayRootPersonId = rootPersonId
  displayData.displayStatus = 'normal'

  displayData.row0Id = []
  displayData.row1Id = []
  displayData.row2Id = []
  displayData.row3Id = []
  displayData.row4Id = []

  displayData.row0Id[0] = rootPersonId

  displayData.result = successStatus
  return displayData
}
