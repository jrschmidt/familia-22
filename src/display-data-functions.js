export const treeDisplayInit = (treeData, rootPersonId, generations) => {
  let displayData = {}
  let successStatus = 'success'

if (generations != 5) successStatus = 'fail'

  displayData.result = successStatus
  return displayData
}
