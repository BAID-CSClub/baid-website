<script setup>
import HeaderVue from "./components/Header.vue";
import FooterVue from "./components/Footer.vue";
</script>

<template>
  <HeaderVue />
  <transition name="fade">
    <router-view></router-view>
  </transition>
  <FooterVue
    msg1="京  ICP备13051651号-1"
    msg2="北京中学版权所有"
    msg3="© 2014 BJZX All Rights Reserved."
    msg4="地址：北京市朝阳区西坝河东里1号"
    msg5="联系电话： 010-50981098（西坝河校区）"
    msg6="010-50951290（东坝南校区）"
  />
</template>

<style>
body {
  margin: 0;
  overflow-x: hidden;
  font-family: 'Source Han Sans SC', Arial, Helvetica, sans-serif;
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
  font-family: 'Source Han Sans SC';
  src: url('./fonts/SourceHanSansSC-VF.otf');
}

</style>
