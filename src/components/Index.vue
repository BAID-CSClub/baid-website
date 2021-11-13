<template>
  <Header />
  <h1>{{ title }}</h1>
  <hr>
  <h1>About</h1>
  <hr>
  <h1>News</h1>
  <hr>
  <h1>Gallery</h1>
</template>

<script>
import Header from "./Header.vue";
import About from "./About.vue";
import News from "./News.vue";
import Gallery from "./Gallery.vue";

export default {
  name: "Index",
  components: {
    Header,
  },
  data() {
    return {
      title: "欢迎来到北京中学国际部",
    };
  },
};
</script>

<style scoped>
</style>