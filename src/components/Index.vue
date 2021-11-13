<template>
  <Header />
  <h1>{{ title }}</h1>
  <hr />
  <h1>About</h1>
  <hr />
  <h1>News</h1>
  <hr />
  <h1>Gallery</h1>
  <Footer
    :ICP="ICP"
    :copyright="copyright"
    :address="address"
    :contact="contact"
  />
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  name: "Index",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      title: "欢迎来到北京中学国际部",
      ICP: "京ICP备13051651号-1",
      copyright: "北京中学版权所有 © 2014 BJZX All Rights Reserved.",
      address: "地址：北京市朝阳区西坝河东里1号",
      contact:
        "联系电话： 010-50981098（西坝河校区） 010-50951290（东坝南校区）",
    };
  },
};
</script>

<style scoped>
</style>