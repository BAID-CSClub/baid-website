<template>
  <div id="container" class="main">
    <div
      class="title"
      data-aos="zoom-in"
      data-aos-duration="600"
    >{{ $t("homeNews.title") }}</div>
    <NewsBlockLeft
      content="在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字"
      title="在此输入文字"
      :imageurl="NewsImages"
      date="年份/月份/日期"
      link="还没做跳转功能"
      data-aos="zoom-in"
      data-aos-duration="600"
    ></NewsBlockLeft>
    <NewsBlockRight
      content="在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字"
      title="在此输入文字"
      :imageurl="NewsImages"
      date="年份/月份/日期"
      link="还没做跳转功能"
      data-aos="zoom-in"
      data-aos-duration="600"
    ></NewsBlockRight>
  </div>
</template>

<script setup>
import NewsBlockLeft from './NewsBlockLeft.vue';
import NewsBlockRight from './NewsBlockRight.vue';
import NewsImages from "../assets/main.jpg"

const news = [
  {

  }
]
</script>

<style scoped>
#container {
  padding: 40px;
}
.title {
  margin: auto;
  text-align: center;
  font-weight: bold;
  font-size: 32px;
  color: var(--main-text);
}
</style>
