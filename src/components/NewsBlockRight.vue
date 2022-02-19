<template>
  <div class="box">
    <div class="img">
      <img :src="props.imageurl" alt="活动配图" class="shadow" />
    </div>
    <div class="content">
      <div class="n-title">{{ title }}</div>
      <div class="n-date">{{ date }}</div>
      <div class="n-note" @click="Jump">{{ content }}</div>
      <router-link class="link" to="#">{{ $t("common.read_more") }}</router-link>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['content', 'title', 'imageurl', 'date', 'link']);
</script>

<style scoped>
.n-title {
  font-size: 32px;
  font-weight: bold;
  margin: 4px 0px;
}
.n-date {
  font-size: 18px;
  color: gray;
  margin: 4px 0px;
}
.box {
  display: flex;
  margin: 40px 0px;
}
.n-note {
  display: inline-block;
  font-size: 18px;
  overflow-block: ellipsis;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  margin: 4px 0px;
}
.img {
  flex: 1;
  align-self: center;
  text-align: center;
}
img {
  height: 260px;
  display: inline-block;
  object-fit: contain;
}
.content {
  flex: 1;
  text-align: left;
  line-height: 1.5;
  color: var(--main-text);
}
.link {
  color: var(--baid-blue);
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  display: block;
  font-size: 18px;
}
@media screen and (max-width: 900px) {
  .box {
    flex-direction: column;
  }
  .content {
    padding-top: 20px;
  }
}
</style>