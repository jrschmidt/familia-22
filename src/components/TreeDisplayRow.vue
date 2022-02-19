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

const treeData = inject('treeData')

const getPersonData = (personId) => {
  return treeData[personId]
}
</script>

<style lang="css">
.tree-display-row {
  overflow: hidden;
  border-color: green;
  border-style: dotted;
}
/* display: grid;
grid-template-columns: 100px 100px 100px 100px 100px;
grid-template-rows: 80px; */

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
