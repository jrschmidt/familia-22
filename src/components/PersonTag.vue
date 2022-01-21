<template>
  <div class="person-tag" :class="rlz" id="pt-x">
    <p>AA</p>
    <p>rlz = {{ rlz }}</p>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  rlz: String
})
</script>

<style lang="css">
.person-tag {
  width: 100px;
  border-color: blue;
  border-style: dotted;
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
