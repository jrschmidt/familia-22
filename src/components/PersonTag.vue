<template>
  <div class="person-tag" id="id">
    <p v-if="personData.birthdate"><strong>{{'b' + personData.birthdate.slice(7) }}</strong></p>
    <p v-if="personData.deathdate"><strong>{{'d' + personData.deathdate }}</strong></p>
    <p><strong>{{ personData.firstname }} {{personData.lastname}}</strong></p>
  </div>
</template>

<script setup>
const props = defineProps({
  personId: String,
  personData: Object
})
</script>

<style lang="css">
.person-tag {
  width: 50px;
  border: black solid 1px;
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
