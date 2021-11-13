<template>
  <Header />
  <h1>{{ title }}</h1>
</template>

<script>
import Header from "./Header.vue";

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