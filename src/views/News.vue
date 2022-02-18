<script setup>
import NewsBlockLeft from '../components/NewsBlockLeft.vue'
import NewsBlockRight from '../components/NewsBlockRight.vue'
import NewsImages from "../assets/main.jpg"
</script>

<template>
  <img :src='NewsImages' alt='' class='background'>
  <div class="main">
    <h1 class="title">N<span style="color: var(--baid-red);">E</span>WS</h1> 
    <NewsBlockRight content="在此输入文字" title="在此输入文字" :imageurl='NewsImages' subtitle="年份/月份/日期" link="还没做跳转功能"></NewsBlockRight>
    <NewsBlockLeft content="在此输入文字" title="在此输入文字" :imageurl='NewsImages' subtitle="年份/月份/日期" link="还没做跳转功能"></NewsBlockLeft>
    <NewsBlockRight content="在此输入文字" title="在此输入文字" :imageurl='NewsImages' subtitle="年份/月份/日期" link="还没做跳转功能"></NewsBlockRight>
    <NewsBlockLeft content="在此输入文字" title="在此输入文字" :imageurl='NewsImages' subtitle="年份/月份/日期" link="还没做跳转功能"></NewsBlockLeft>
    <NewsBlockRight content="在此输入文字" title="在此输入文字" :imageurl='NewsImages' subtitle="年份/月份/日期" link="还没做跳转功能"></NewsBlockRight>
    <NewsBlockLeft content="在此输入文字" title="在此输入文字" :imageurl='NewsImages' subtitle="年份/月份/日期" link="还没做跳转功能"></NewsBlockLeft>
  </div>
</template>

<style scoped>
.background {
  content:fixed;
  height:100vh;
  width:100vw;
  object-fit: cover;
  position:fixed;
  left:0px;
  top:0px;
  z-index:-3;
  filter:brightness(60%);
}
.main {
  width:65vw;
  max-width:1000px;
  background:white;
  position:relative;
  margin:auto;
  padding:20px;
}
.title {
  text-align:middle;
  color: var(--baid-blue);
  margin-left: 15px;
  font-size: 65px;
}
@media screen and (max-width: 800px) {
  .title {
    margin-left: 20px;
  }
   .blocker{
    display:none;
  }
}
</style>
