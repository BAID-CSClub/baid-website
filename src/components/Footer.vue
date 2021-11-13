<script>
export default {
  props: ["ICP", "copyright", "address", "contact"],
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
