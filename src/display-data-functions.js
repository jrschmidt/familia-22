// A set of functions to generate the data necessary to render the family
// tree display. The following functions are included:


// viewModelInit()
// Generates data needed for initial rendering of family tree display.


// treeShiftToFather()
// Generates data needed for moving the family tree display back one generation,
// making the father of the previous display root person the new root, deleting
// the root person, the root person's mother and all her ancestors, and adding
// another generation of the new root person's ancestors.


// treeShiftToMother()
// Generates data needed for moving the family tree display back one generation,
// making the mother of the previous display root person the new root, deleting
// the root person, the root person's father and all his ancestors, and adding
// another generation of the new root person's ancestors.


// treeShiftToChild()
// Generates data needed for moving the family tree display forward one
// generation, making the child of the previous display root person the new
// root, adding the root person's spouse and their ancestors, and deleting
// the oldest generation from the display.


// growTree()
// A helper function to recursively populate the display tree data with
// references to the people in the tree and their relationship to each other.


// pairArrayElements()
// Takes an array with an even number of elements and returns a new array
// with the same elements in the same order, but paired into arrays with two
// elements each. For example:
//
// pairArrayElements( [a,b,c,d,e,f,g,h] )
//
// would return
//
// [ [a,b], [c,d], [e,f], [g,h] ]
//
// This is used to pair mother/father pairs in the view model so they can be
// displayed next to each other.


export const viewModelInit = (treeData, rootPersonId, generations) => {
  const locationLabels = [
      'singleton gen0root',
      'normal gen1pair0',
      'normal gen2pair0',
      'normal gen2pair1',
      'normal gen3pair0',
      'normal gen3pair1',
      'normal gen3pair2',
      'normal gen3pair3',
      'compressed gen4pair0',
      'compressed gen4pair1',
      'compressed gen4pair2',
      'compressed gen4pair3',
      'compressed gen4pair4',
      'compressed gen4pair5',
      'compressed gen4pair6',
      'compressed gen4pair7'
    ]

  let viewModelData = {}
  let successStatus = 'success'

  // (For the time being we are only implementing a display with 5 generations.)
  if (generations != 5) successStatus = 'fail'

  viewModelData.generationsDisplayed = generations
  viewModelData.displayRootPersonId = rootPersonId
  viewModelData.displayStatus = 'normal'
  viewModelData.rows = [ [], [], [], [], [] ]

  growTree(
    treeData,
    viewModelData,
    rootPersonId,
    0,
    generations - 1
  )

  let pairsFlat = viewModelData.rows.flat()
  viewModelData.pairObjects = pairsFlat.map((pair, index) => {
    return {
      pairLocation: locationLabels[index],
      people: pair
    }
  })

  viewModelData.result = successStatus
  return viewModelData
}


export const growTree = (
  treeData,
  viewModelData,
  startPerson,
  subtreeStartGeneration,
  endGeneration
) => {
  placePerson(viewModelData.rows[subtreeStartGeneration], startPerson)

  if (subtreeStartGeneration != endGeneration) {
    growTree(
      treeData,
      viewModelData,
      treeData[startPerson].fatherId,
      subtreeStartGeneration + 1,
      endGeneration
    )

    growTree(
      treeData,
      viewModelData,
      treeData[startPerson].motherId,
      subtreeStartGeneration + 1,
      endGeneration
    )

  }
}


export const placePerson = (row, item) => {
  if (row.length === 0) {
    row.push( [item] )
  }
  else {
    let index = row.length -1
    if (row[index].length === 1)
      row[index].push(item)
    else
      row.push( [item] )
  }
}


export const pairArrayElements = (arrayIn) => {
  let result = []

  if (arrayIn.length % 2 === 0) {
    while (arrayIn.length > 0) {
      let p = []
      p.push(arrayIn.shift())
      p.push(arrayIn.shift())
      result.push(p)
    }
  }

  return result
}
