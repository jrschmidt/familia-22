<template>
  <div class="person-tag" :class="rlz" id="pt-x">
    <p><strong>PersonTag </strong></p>
    <p><em>{{ rlz }}</em></p>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'

const rlz = inject('rlz')
</script>

<style lang="css">
.person-tag {
  width: 100px;
  border-color: blue;
  border-style: dotted;
  color: green;
  font-size: 0.85rem;
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
