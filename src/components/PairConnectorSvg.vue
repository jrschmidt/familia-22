<template>
  <div class="pair-connector-svg">
    <svg width="100%" height="100%">
      <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="#99cc99" stroke-width="2"/>
    </svg>
  </div>
</template>

<script setup>
</script>

<style lang="css">
.pair-connector-svg {
  height: 30px;
}

.normal .pair-connector-svg {
  width: 60px;
  height: 30px;
}

.compressed .pair-connector-svg {
  width: 10px;
}
</style>
