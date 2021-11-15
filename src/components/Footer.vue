<script>
export default {
  data() {
    return {
      ICP: "京ICP备13051651号-1",
      copyright: "北京中学版权所有 © 2014 BJZX All Rights Reserved.",
      address: "地址：北京市朝阳区西坝河东里1号",
      contact:
        "联系电话： 010-50981098（西坝河校区） 010-50951290（东坝南校区）",
    };
  },
};
</script>

<template>
  <footer>
    <div>
      <span>{{ ICP }}</span>
      <span style="border: none">{{ copyright }}</span>
    </div>
    <div>
      <span>{{ address }}</span>
      <span style="border: none">{{ contact }}</span>
    </div>
  </footer>
</template>

<style scoped>
footer {
  text-align: center;
  width: 100%;
  background-color: #2d2d2d;
  color: #ffffff;
  padding: 24px 2% 24px 2%;
}
span {
  text-align: center;
  font-size: 16px;
  padding-left: 10px;
  padding-right: 10px;
  border-right: solid 2px grey;
}
div {
  margin: 2px;
}
</style>
