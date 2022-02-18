<template>
  <div class="tree-display-row">
    <PersonTag
      v-for="(person, index) in people"
      v-bind:key="person"
      v-bind:id="person"
    />
  </div>
</template>

<script setup>
import PersonTag from './PersonTag.vue'

const props = defineProps({
  id: String,
  people: Array
})
</script>

<style lang="css">
.tree-display-row {
  overflow: hidden;
  border-color: green;
  border-style: dotted;
  display: grid;
  grid-template-columns: 100px 100px 100px 100px 100px;
  grid-template-rows: 80px;
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
