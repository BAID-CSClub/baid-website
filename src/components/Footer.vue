<script>
export default {
  props: ["ICP", "copyright", "address", "contact"],
};
</script>

<template>
  <footer>
    <div id="img_container">
      <img src="../assets/footer_logo.png" alt="logo" width="360"/>
    </div>
    <div id="text_container">
      <div>
        <span>{{ ICP }}</span>
        <span style="border: none">{{ copyright }}</span>
      </div>
      <div>
        <span>{{ address }}</span>
        <span style="border: none">{{ contact }}</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  text-align: center;
  background-color: #2d2d2d;
  color: #ffffff;
  border-top: solid 12px rgb(35, 35, 35);
  display: flex;
  padding: 24px;
  align-items: center;
  justify-content: center;
  overflow: auto;
}
span {
  text-align: center;
  font-size: 16px;
  padding: 0px 12px;
  border-right: solid 2px grey;
}
div {
  margin: 2px;
}
#img_container {
  flex: 1;
}
#text_container {
  flex: 1;
}
@media (max-width: 900px) {
  footer{
    flex-direction: column;
  }
}
</style>