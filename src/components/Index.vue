<template>
  <div id="background">
    <Header />
    <div id="main">
      <h1 id="title">{{ title }}</h1>
    </div>
  </div>
  <hr />
  <h1>About</h1>
  <hr />
  <h1>News</h1>
  <hr />
  <h1>Gallery</h1>
  <Footer />
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      title: "欢迎来到北京中学国际部",
    };
  },
};
</script>

<style scoped>
#main {
  background-color: rgba(0, 0, 0, 0.5);
  height: 600px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
#background {
  background: url("../assets/main.jpg") center no-repeat;
  background-size: cover;
}
#title {
  margin: auto;
}
</style>