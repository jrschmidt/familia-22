<template>
  <div class="tree-display-row">
    <div v-if="notSingletonRow(people)">
      <PersonPair
        v-for="pair in people"
        v-bind:key="generatePairId(pair)"
        v-bind:pair="pair"
      />
    </div>
    <div v-else>
      <PersonPairSingleton
      v-bind:key="getSingletonId(people)"
      v-bind:personId="getSingletonId(people)"
      />
    </div>
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

const getSingletonId = (people) => {
  return people[0][0]
}
</script>

<style lang="css">
.tree-display-row {
  display: flex;
  flex-direction: row;
  justify-content:space-around;
  overflow: hidden;
  border-color: green;
  border-style: dotted;
}

.normal {
  height: 100%;
}

.adding {
  height: 100%;
}

.deleting {
  height: 0%;
}
</style>
