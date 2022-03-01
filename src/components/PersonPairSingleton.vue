<template>
  <div class="person-pair-singleton">
    <PersonTag
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
  personId: String
})

const familyTreeData = inject('familyTreeData')

const getPersonData = (personId) => {
  return familyTreeData[ personId ]
}
</script>

<style lang="css">
.person-tag {
  width: 70px;
  border-color: blue;
  border-style: dotted;
  color: green;
  font-size: 0.6rem;
}

.person-tag p {
  margin: 8px;
}

.go-right{
  grid-column-start: 4;
  grid-column-end: 5;
}

.go-left{
  grid-column-start: 2;
  grid-column-end: 3;
}
</style>
