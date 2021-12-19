<template>
  <div>
    <div id="background">
      <div id="head">
        <h1 id="title">{{ title }}</h1>
      </div>
    </div>
    <div>
      <HomeAbout></HomeAbout>
      <HomeNewsVue></HomeNewsVue>
      <HomeGallery
        :images="[
          '/src/assets/1.jpg',
          '/src/assets/2.jpg',
          '/src/assets/3.jpg',
          '/src/assets/4.jpg',
          '/src/assets/5.jpg',
          '/src/assets/2.jpg',
        ]"
      />
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
#head {
  background-color: rgba(0, 0, 0, 0.5);
  height: calc(100vh);
  color: white;
  display: flex;
  justify-content: center;
}
#background {
  background: url("../assets/main.jpg") center no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
}
#title {
  margin: auto;
  letter-spacing: 2px;
}
.main,
hr {
  margin: auto;
  max-width: 1200px;
  width: 100%;
}
</style>
