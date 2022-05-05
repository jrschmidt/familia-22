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


// groupArrayElementsIntoPairs()
// Takes an array with an even number of elements and returns a new array
// with the same elements in the same order, but paired into arrays with two
// elements each. For example:
//
// groupArrayElementsIntoPairs( [a,b,c,d,e,f,g,h] )
//
// would return
//
// [ [a,b], [c,d], [e,f], [g,h] ]
//
// This is used to pair mother/father pairs in the view model so they can be
// displayed next to each other.


const pairLocationLabels = [
  'gen0root',
  'gen1pair0',
  'gen2pair0',
  'gen2pair1',
  'gen3pair0',
  'gen3pair1',
  'gen3pair2',
  'gen3pair3',
  'gen4pair0',
  'gen4pair1',
  'gen4pair2',
  'gen4pair3',
  'gen4pair4',
  'gen4pair5',
  'gen4pair6',
  'gen4pair7',
]

const graphOfPairLocations = {
  gen0root: {
    parentsOfMaleLocation: 'gen1pair0',
    parentsOfFemaleLocation: 'gen1pair0',
    childLocation: null,
    classes: ['static', 'singleton', 'gen0root']
  },

  gen1pair0: {
    parentsOfMaleLocation: 'gen2pair0',
    parentsOfFemaleLocation: 'gen2pair1',
    childLocation: 'gen0root',
    classes: ['static', 'normal', 'gen1pair0']
  },

  gen2pair0: {
    parentsOfMaleLocation: 'gen3pair0',
    parentsOfFemaleLocation: 'gen3pair1',
    childLocation: 'gen1pair0',
    classes: ['static', 'normal', 'gen2pair0']
  },

  gen2pair1: {
    parentsOfMaleLocation: 'gen3pair2',
    parentsOfFemaleLocation: 'gen3pair3',
    childLocation: 'gen1pair0',
    classes: ['static', 'normal', 'gen2pair1']
  },

  gen3pair0: {
    parentsOfMaleLocation: 'gen4pair0',
    parentsOfFemaleLocation: 'gen4pair1',
    childLocation: 'gen2pair0',
    classes: ['static', 'normal', 'gen3pair0']
  },

  gen3pair1: {
    parentsOfMaleLocation: 'gen4pair2',
    parentsOfFemaleLocation: 'gen4pair3',
    childLocation: 'gen2pair0',
    classes: ['static', 'normal', 'gen3pair1']
  },

  gen3pair2: {
    parentsOfMaleLocation: 'gen4pair4',
    parentsOfFemaleLocation: 'gen4pair5',
    childLocation: 'gen2pair1',
    classes: ['static', 'normal', 'gen3pair2']
  },

  gen3pair3: {
    parentsOfMaleLocation: 'gen4pair6',
    parentsOfFemaleLocation: 'gen4pair7',
    childLocation: 'gen2pair1',
    classes: ['static', 'normal', 'gen3pair3']
  },

  gen4pair0: {
    parentsOfMaleLocation: null,
    parentsOfFemaleLocation: null,
    childLocation: 'gen3pair0',
    classes: ['static', 'compressed', 'gen4pair0']
  },

  gen4pair1: {
    parentsOfMaleLocation: null,
    parentsOfFemaleLocation: null,
    childLocation: 'gen3pair0',
    classes: ['static', 'compressed', 'gen4pair1']
  },

  gen4pair2: {
    parentsOfMaleLocation: null,
    parentsOfFemaleLocation: null,
    childLocation: 'gen3pair1',
    classes: ['static', 'compressed', 'gen4pair2']
  },

  gen4pair3: {
    parentsOfMaleLocation: null,
    parentsOfFemaleLocation: null,
    childLocation: 'gen3pair1',
    classes: ['static', 'compressed', 'gen4pair3']
  },

  gen4pair4: {
    parentsOfMaleLocation: null,
    parentsOfFemaleLocation: null,
    childLocation: 'gen3pair2',
    classes: ['static', 'compressed', 'gen4pair4']
  },

  gen4pair5: {
    parentsOfMaleLocation: null,
    parentsOfFemaleLocation: null,
    childLocation: 'gen3pair2',
    classes: ['static', 'compressed', 'gen4pair5']
  },

  gen4pair6: {
    parentsOfMaleLocation: null,
    parentsOfFemaleLocation: null,
    childLocation: 'gen3pair3',
    classes: ['static', 'compressed', 'gen4pair6']
  },

  gen4pair7: {
    parentsOfMaleLocation: null,
    parentsOfFemaleLocation: null,
    childLocation: 'gen3pair3',
    classes: ['static', 'compressed', 'gen4pair7']
  }

}

export const getGhostPairObjects = () => {
  const inside = pairLocationLabels.map( (tag) => {
    let label = tag + 'ghost'
    return {
      label: label,
      classes: ['ghost', tag, 'no-show'],
      people: []
    }
  })

  const outside = [
    'ghost0',
    'ghost1',
    'ghost2',
    'ghost3',
    'ghost4',
    'ghost5',
    'ghost6',
    'ghost7'
  ].map( (tag) => {
    return {
      label: tag,
      classes: ['ghost', tag, 'no-show'],
      people: []
    }
  })

  return inside.concat(outside)
}

const ghostPairObjects = getGhostPairObjects()

const connectorFixedClasses = [
  'straight-singleton parents-of-0-0',
  'left-w5 parents-of-1-0',
  'right-w5 parents-of-1-1',
  'left-w3 parents-of-2-0',
  'right-w3 parents-of-2-1',
  'left-w3 parents-of-2-2',
  'right-w3 parents-of-2-3',
  'straight-skinny parents-of-3-0',
  'straight-skinny parents-of-3-1',
  'straight-skinny parents-of-3-2',
  'straight-skinny parents-of-3-3',
  'straight-skinny parents-of-3-4',
  'straight-skinny parents-of-3-5',
  'straight-skinny parents-of-3-6',
  'straight-skinny parents-of-3-7'
]


export const viewModelInit = (familyTreeData, rootPersonId, generations) => {
  let viewModelData = {}
  let successStatus = 'success'

  // (For the time being we are only implementing a display with 5 generations.)
  if (generations != 5) successStatus = 'fail'

  viewModelData.generationsDisplayed = generations
  viewModelData.displayRootPersonId = rootPersonId
  viewModelData.displayStatus = 'normal'
  viewModelData.rows = [ [], [], [], [], [] ]

  growTree(
    familyTreeData,
    viewModelData,
    rootPersonId,
    0,
    generations - 1
  )

  // Extract later as 'rows to pair objects' function
  let pairsFlat = viewModelData.rows.flat()

  viewModelData.pairObjects = pairsFlat.map((pair, index) => {
    let label = pairLocationLabels[index]
    return {
       label: label,
       classes: graphOfPairLocations[label].classes,
       people: pair
     }
  })
  // (end)

  viewModelData.pairObjects = viewModelData.pairObjects.concat(ghostPairObjects)
  viewModelData.connectorClasses = [...connectorFixedClasses]

  viewModelData.result = successStatus
  return viewModelData
}


export const treeShiftToFather = (viewModelData, familyTreeData) => {

  // Start with a copy of viewModelData.rows with first generation stripped out.
  let workingArrays = [...viewModelData.rows]
  workingArrays.shift()

  workingArrays = workingArrays.map( (row) => {
    return row.flat()
  })

  // Here we need to cut each generation in half to remove mother's family.
  workingArrays = workingArrays.map( (row) => {
    return row.slice(0, row.length / 2)
  })


  // Next we add a new generation (parents of former last generation).
  let lastGeneration = workingArrays[workingArrays.length - 1]

  let newGeneration = []
  let father = null
  let mother = null

  lastGeneration.forEach( (person) => {
    father = familyTreeData[person].fatherId ? familyTreeData[person].fatherId : null
    mother = familyTreeData[person].motherId ? familyTreeData[person].motherId : null
    newGeneration.push(father)
    newGeneration.push(mother)
  })

  workingArrays.push(newGeneration)

  let rows = workingArrays.map( (row) => {
      return groupArrayElementsIntoPairs(row)
    })
    viewModelData.rows = rows

    // Extract later as 'rows to pair objects' function
    let pairsFlat = viewModelData.rows.flat()

    viewModelData.pairObjects = pairsFlat.map((pair, index) => {
      let label = pairLocationLabels[index]
      return {
         label: label,
         classes: graphOfPairLocations[label].classes,
         people: pair
       }
    })
    // (end)

  return viewModelData
}


export const growTree = (
  familyTreeData,
  viewModelData,
  startPerson,
  subtreeStartGeneration,
  endGeneration
) => {
  placePerson(viewModelData.rows[subtreeStartGeneration], startPerson)

  if (subtreeStartGeneration != endGeneration) {
    growTree(
      familyTreeData,
      viewModelData,
      familyTreeData[startPerson].fatherId,
      subtreeStartGeneration + 1,
      endGeneration
    )

    growTree(
      familyTreeData,
      viewModelData,
      familyTreeData[startPerson].motherId,
      subtreeStartGeneration + 1,
      endGeneration
    )

  }
}


export const placePerson = (row, person) => {
  if (row.length === 0) {
    row.push( [person] )
  }
  else {
    let index = row.length -1
    if (row[index].length === 1)
      row[index].push(person)
    else
      row.push( [person] )
  }
}


export const groupArrayElementsIntoPairs = (arrayIn) => {
  let result = []
  let p

    while (arrayIn.length > 0) {
      if (arrayIn.length % 2 === 0) {
      p = []
      p.push(arrayIn.shift())
      p.push(arrayIn.shift())
    }
    else {
      p = []
      p.push(arrayIn.shift())
    }
    result.push(p)
  }

  return result
}
