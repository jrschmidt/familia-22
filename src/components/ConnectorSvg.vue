<template>
  <div class="connector-svg" :class="svgSize" id="svg-x">
    <svg :class="svgSize" height="100%" width="100%">
      <rect width="100%" height="100%" fill="#eeffff"/>
      <line x1="0%" y1="0%" x2="0%" y2="50%" stroke="#999999" stroke-width="9"/>
      <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="#999999" stroke-width="5"/>
      <line x1="100%" y1="50%" x2="100%" y2="100%" stroke="#999999" stroke-width="9"/>
    </svg>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const svgSize = inject('svgSize')
</script>

<style lang="css">
.connector-svg {
  border-color: red;
  border-style: dotted;
}

.connector-svg {
  padding-left: 50px;
  padding-right: 50px;
}

div.span-4 {
  grid-column-start: 2;
  grid-column-end: 6;
}

svg.span-4 {
  width: 100%;
  height: 100%;
}

div.span-2 {
  grid-column-start: 2;
  grid-column-end: 4;
}

svg.span-2 {
  width: 100%;
  height: 100%;
}
</style>
