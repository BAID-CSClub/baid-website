<template>
  <div>
    <div class="previewModal" v-show="current_displaying !== undefined"></div>
    <div class="grid">
      <img class="item" v-for="image in props.images" :src="image" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import J1 from "../assets/1.jpg";
import J2 from "../assets/2.jpg";
import J3 from "../assets/3.jpg";
import J4 from "../assets/4.jpg";
import J5 from "../assets/5.jpg";

const props = defineProps({
  images: {
    type: Array,
    default: () => [
      J1,
      J2,
      J3,
      J4,
      J5
    ]
  },
});

const current_displaying = ref(undefined); // 当前展示的图片 index / undefined


</script>

<style scoped>
.grid {
  column-count: 3;
  margin: 10px;
}
.item {
  break-inside: avoid;
  margin-bottom: 1rem;
  object-fit: cover;
  padding: 1rem;
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 800px) {
  .grid {
    column-count: 2;
  }
}
@media screen and (max-width: 500px) {
  .grid {
    column-count: 1;
  }
}
</style>
