<template>
  <div class="tree-display-row">
      <PersonPair
        v-if="notSingletonRow(people)"
        v-for="(pair, index) in people"
        v-bind:key="generatePairId(pair, id)"
        v-bind:class="getColumnClass(id, index)"
        v-bind:pair="pair"
      />
      <PersonPairSingleton
      v-else
      v-bind:key="getSingletonId(people)"
      v-bind:personId="getSingletonId(people)"
      />
  </div>
</template>

<script setup>
import PersonPair from './PersonPair.vue'
import PersonPairSingleton from './PersonPairSingleton.vue'

const props = defineProps({
  id: String,
  people: Array
})

const notSingletonRow = (people) => {
  return ( people[people.length - 1].length > 1 )
}

const generatePairId = (pair) => {
  return pair[0] + pair[1]
}

const getColumnClass = (rowId, index) => {
  const columnClasses = {
    row0: ['pc13', 'pc35', 'pc57', 'pc79', 'pc911', 'pc1113', 'pc1315', 'pc1517'],
    row1: ['pc24', 'pc68', 'pc1012', 'pc1416'],
    row2: ['pc46', 'pc1214'],
    row3: ['pc810']
  }

  return columnClasses[rowId][index]
}

const getSingletonId = (people) => {
  return people[0][0]
}
</script>

<style lang="css">
.tree-display-row {
  display: grid;
  justify-items: center;
  grid-template-columns: 50px 50px 50px 50px 50px 50px 50px 50px;
}
</style>
