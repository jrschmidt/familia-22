<template>
  <div class="person-tag">
    <p>{{ personData.firstname }}</p>
    <p>{{ personData.lastname }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  personData: Object
})
</script>

<style lang="css">
.person-tag {
  background-color: #f8fff8;
  color: green;
  font-size: 0.6rem;
  height: 30px;
  width: 50px;
}

.person-tag p {
  margin: 4px;
}
</style>
