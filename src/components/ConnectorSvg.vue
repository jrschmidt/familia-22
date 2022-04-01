<template>
  <div class="connector-svg">
    <svg height="100%" width="100%">
      <line x1="0%" y1="0%" x2="0%" y2="50%" stroke="#99cc99" stroke-width="4"/>
      <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="#99cc99" stroke-width="2"/>
      <line x1="100%" y1="50%" x2="100%" y2="100%" stroke="#99cc99" stroke-width="4"/>
    </svg>
  </div>
</template>

<script setup>
// import { inject } from 'vue'

// const svgSize = inject('svgSize')
</script>

<style lang="css">
.connector-svg {
}

.connector-svg.straight {
}

.connector-svg.left {
  padding-left: 60px;
  padding-right: 60px;
}

.connector-svg.right {
  padding-left: 60px;
  padding-right: 60px;
}
</style>
