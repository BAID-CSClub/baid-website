<script setup>
import NewsBlockLeft from '../components/NewsBlockLeft.vue'
import NewsBlockRight from '../components/NewsBlockRight.vue'
import NewsImages from "../assets/main.jpg"
import PageTop from '../components/PageTop.vue';
</script>

<template>
  <div>
    <PageTop :title="$t('news.title')" img="/src/assets/main.jpg"></PageTop>
    <div id="content" class="main">
      <NewsBlockRight
        content="在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字"
        title="在此输入文字"
        :imageurl="NewsImages"
        date="年份/月份/日期"
        link="还没做跳转功能"
        data-aos="zoom-in"
        data-aos-duration="600"
      ></NewsBlockRight>
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
      <NewsBlockLeft
        content="在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字"
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
      <NewsBlockLeft
        content="在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字在此输入文字"
        title="在此输入文字"
        :imageurl="NewsImages"
        date="年份/月份/日期"
        link="还没做跳转功能"
        data-aos="zoom-in"
        data-aos-duration="600"
      ></NewsBlockLeft>
    </div>
  </div>
</template>

<style scoped>
/* desktop */
@media (min-width: 600px) {
  #content {
    padding: 40px;
  }
}
/* mobile */
@media (max-width: 600px) {
  #content {
    padding: 20px 40px 40px;
  }
}
#content {
  color: var(--main-text);
}

.title {
  font-weight: bold;
  font-size: 24px;
  margin: 20px 0px;
}
.text {
  font-size: 16px;
  line-height: 1.5;
  margin: 10px 0px;
}
</style>
