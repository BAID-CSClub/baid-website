<template>
  <div>
    <div id="head">
      <swiper :navigation="true" :pagination="{ clickable: true }" :loop="true" class="mySwiper">
        <swiper-slide>
          <img src="../assets/main.jpg" alt="main1" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/main2.jpg" alt="main2" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/main3.jpg" alt="main3" />
        </swiper-slide>
      </swiper>
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

import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import "swiper/css/navigation";
import "swiper/css/pagination";



// import Swiper core and required modules
import SwiperCore, {
  Navigation, Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);


export default {
  components: {
    HeaderVue,
    HomeAboutVue,
    HomeNewsVue,
    HomeGalleryVue,
    HomeAbout,
    HomeGallery,
    Swiper,
    SwiperSlide,

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
  height: calc(100vh - 75px);
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
.swiper {
  width: 100%;
  height: 100%;
  --swiper-theme-color: #2464a4;
}

.swiper-slide {
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
