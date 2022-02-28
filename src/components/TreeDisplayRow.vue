<template>
  <div class="tree-display-row">
    <PersonTag
      v-for="(personId, index) in people"
      v-bind:key="personId"
      v-bind:personId="personId"
      v-bind:personData="getPersonData(personId)"
    />
  </div>
</template>

<script setup>
import PersonTag from './PersonTag.vue'

import { inject } from 'vue'

const props = defineProps({
  id: String,
  people: Array
})

const familyTreeData = inject('familyTreeData')

const getPersonData = (personId) => {
  return familyTreeData[personId]
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
