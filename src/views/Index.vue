<template>
  <div>
    <div id="head">
      <swiper
        :navigation="true"
        :pagination="{ clickable: true }"
        :loop="true"
        :autoplay="{ delay: 4000 }"
        class="mySwiper"
      >
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
        :images="images"
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

// swiper
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore, {
  Navigation, Pagination, Autoplay
} from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay]);

import J1 from "../assets/1.jpg";
import J2 from "../assets/2.jpg";
import J3 from "../assets/3.jpg";
import J4 from "../assets/4.jpg";
import J5 from "../assets/5.jpg";
import J6 from "../assets/6.jpg";
import J7 from "../assets/7.jpg";
import J8 from "../assets/8.jpg";



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
      images: [
        J1,
        J2,
        J3,
        J4,
        J5,
        J6,
        J7,
        J8,
      ]
    };
  },
};
</script>

<style scoped>
#head {
  height: calc(100vh - 78.5px);
}
#background {
  background: url("../assets/main.jpg") center no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
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
  --swiper-theme-color: var(--baid-blue);
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
