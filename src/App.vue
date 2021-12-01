<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HeaderVue from "./components/Header.vue";
import FooterVue from "./components/Footer.vue";

</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HeaderVue />
  <router-view></router-view>
  <FooterVue msg1="京  ICP备13051651号-1" msg2="北京中学版权所有" msg3="© 2014 BJZX All Rights Reserved." msg4="地址：北京市朝阳区西坝河东里1号" msg5="联系电话： 010-50981098（西坝河校区）" msg6="010-50951290（东坝南校区）" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  overflow-x: hidden;
}
</style>
