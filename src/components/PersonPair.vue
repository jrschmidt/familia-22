<template>
  <div class="person-pair">
    <PersonTag
      class="pt-left"
      v-bind:key="pair.people[0]"
      v-bind:personData="getPersonData(pair, 0)"
    />
    <PersonTag
      class="pt-right"
      v-if="pair.people.length > 1"
      v-bind:key="pair.people[1]"
      v-bind:personData="getPersonData(pair, 1)"
    />
  </div>
</template>

<script setup>
import PersonTag from './PersonTag.vue'

import { inject } from 'vue'

const props = defineProps({
  pair: Object
})

const familyTreeData = inject('familyTreeData')

const getPersonData = (pair, index) => {
  return familyTreeData[pair.people[index]]
}
</script>

<style lang="css">
.person-pair {
  position: absolute;
  display: flex;
  justify-content: center;
}

.normal {
  width: 240px;
}

.compressed {
  width: 120px;
}

.singleton {
  width: 120px;
}
</style>
