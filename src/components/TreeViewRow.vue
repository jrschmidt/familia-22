<template>
  <div class="tree-view-row" :class="collapse">
    <span>{{ tag }}</span>
    <PersonTag/>
  </div>
</template>

<script setup>
import PersonTag from './PersonTag.vue'

import { inject } from 'vue'

const props = defineProps({
  tag:String
})

const collapse = inject('collapse')

</script>

<style lang="css">
.tree-view-row {
  overflow: hidden;
  border-color: green;
  border-style: dotted;
  display: grid;
  grid-template-columns: 100px 100px 100px 100px 100px;
  grid-template-rows: 80px;
}

.collapse {
  height: 0px;
}
</style>
