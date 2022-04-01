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
  background-color: #f0f0ff;
  color: green;
  font-size: 0.6rem;
  height: 30px;
}

.normal .person-tag {
  width: 60px;
}

.compressed .person-tag {
  width: 50px;
}

.normal .person-tag.pt-left {
  margin-right: 30px;
}

.normal .person-tag.pt-right {
  margin-left: 30px;
}

.compressed .person-tag.pt-left {
  margin-right: 5px;
}

.compressed .person-tag.pt-right {
  margin-left: 5px;
}

.singleton .person-tag {
  width: 60px;
}

.person-tag p {
  margin: 2px;
}
</style>
