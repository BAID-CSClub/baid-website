<template>
  <div>
    <div id="background">
      <div id="main">
        <h1 id="title">{{ title }}</h1>
      </div>
    </div>
    <div class="main-area">
      <HomeAbout></HomeAbout>
      <hr style="margin: 0" />
      <HomeNewsVue></HomeNewsVue>
      <hr />
      <HomeGallery :images="['/src/assets/1.jpg', '/src/assets/2.jpg', '/src/assets/3.jpg', '/src/assets/4.jpg', '/src/assets/5.jpg', '/src/assets/2.jpg']"/>
    </div>
  </div>
</template>

<script>
import HeaderVue from "../components/Header.vue";
import HomeAboutVue from "../components/HomeAbout.vue";
import HomeNewsVue from "../components/HomeNews.vue";
import HomeGalleryVue from "../components/HomeGallery.vue";
import HomeAbout from "../components/HomeAbout.vue";
import HomeGallery from "../components/HomeGallery.vue";

export default {
  components: {
    HeaderVue,
    HomeAboutVue,
    HomeNewsVue,
    HomeGalleryVue,
    HomeAbout,
    HomeGallery,
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
  /*align-items: right;*/
  justify-content: center;
}
#background {
  background: url("../assets/main.jpg") center no-repeat;
  background-size: cover;
}
#title {
  margin: auto;
  letter-spacing: 2px;
}
.main-area {
  margin: auto;
  max-width: 1200px;
  width: 100%;
}
</style>
