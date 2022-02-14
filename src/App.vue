<script setup>
import HeaderVue from "./components/Header.vue";
import FooterVue from "./components/Footer.vue";
import { computed, onMounted, ref } from "vue";

// if not language has been specified
if (!localStorage.getItem('lang')) {
  let language = window.navigator.userLanguage || window.navigator.language;
  localStorage.setItem('lang', language);
}

const show_header = ref(false);

function handle_scroll(event) {
  //  如果向上滑动, 展示header
  first_passed.value = window.scrollY > window.innerHeight;
  show_header.value = event.deltaY < 10;
}


const first_passed = ref(false); // 是否划过第一屏

onMounted(() => {
  window.addEventListener("wheel", handle_scroll)
})
</script>

<template>
  <HeaderVue
    :class="{ show: show_header, hide: !show_header, enable_control: first_passed }"
    class="header"
  />

  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <FooterVue
    ICP="京ICP备13051651号 - 1"
    copyright="北京中学版权所有 © 2014 BJZX All Rights Reserved."
    address="地址：北京市朝阳区西坝河东里1号"
    contact="联系电话： 010-50981098（西坝河校区） 010-50951290（东坝南校区）"
  />
</template>

<style>
body {
  margin: 0;
  overflow-x: hidden;
  font-family: "Source Han Sans SC", Arial, Helvetica, sans-serif;
  --baid-blue: #2464a4;
  --baid-red: #b63f34;
  --main-text: #2d2d2d;
}

html::-webkit-scrollbar {
  width: 4px;
  position: absolute;
  /*height: 4px;*/
  display: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@font-face {
  font-family: "Source Han Sans SC";
  src: url("./fonts/SourceHanSansSC-VF.otf");
}
</style>

<style scoped>
.enable_control.show {
  top: 0;
}
.enable_control.hide {
  top: -100px;
}
.header {
  transition: top 0.2s ease;
}
.enable_control {
  width: 100vw;
  position: fixed;
  z-index: 100;
}
</style>
