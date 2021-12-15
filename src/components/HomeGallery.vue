<script setup>
const props = defineProps({
  images: Array
})
</script>
<template>
  <h1 class="title">GALLERY</h1>
  <div class="grid">
    <img v-for="img in images" :src="img" alt="" class="item">
  </div>
</template>
<style scoped>
.title {
  text-align: left;
  color: #4a698d;
  /*margin-left: 5px;*/
  font-size: 40px;
}
.grid {
  column-count: 3;
  column-gap: 1rem;
  width: 100%;
}
.item {
  break-inside: avoid;
  margin-bottom: 1rem;
}
img{
  width: 100%;
  margin-bottom: 1vw;
  transition: all 0.1s ease-in;
  transform: scale(1);
}

img:hover{
  transform: scale(1.05);
}
</style>
