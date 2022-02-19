// A set of functions to generate the data necessary to render the family
// tree display. The following functions are included:

// treeDisplayInit()
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

// fillTree()
// A helper function to recursively populate the display tree data with
// references to the people in the tree and their relationship to each other.



export const treeDisplayInit = (treeData, rootPersonId, generations) => {
  let displayData = {}
  let successStatus = 'success'

  // (For the time being we are only implementing a display with 5 generations.)
  if (generations != 5) successStatus = 'fail'

  displayData.generationsDisplayed = generations
  displayData.displayRootPersonId = rootPersonId
  displayData.displayStatus = 'normal'

  const empties = [ {},{},{},{},{} ]
  displayData.rows = empties.map((row, index) => {
    row.status = 'normal'
    row.generation = 4 - index
    row.people = []
    // console.log(index, row.generation)
    return row
  })

  fillTree(
    treeData,
    displayData,
    rootPersonId,
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
  endGeneration
) => {
  displayData.rows[endGeneration - rootGeneration].people.push(rootPerson)

  if (rootGeneration != endGeneration) {
    fillTree(
      treeData,
      displayData,
      treeData[rootPerson].fatherId,
      rootGeneration + 1,
      endGeneration
    )

    fillTree(
      treeData,
      displayData,
      treeData[rootPerson].motherId,
      rootGeneration + 1,
      endGeneration
    )

  }
}
