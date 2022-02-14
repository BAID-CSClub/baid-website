<script>
export default {
  props: ["ICP", "copyright", "address", "contact"],
};
</script>

<template>
  <footer>
    <div id="footer_container" class="main">
      <div id="img_container">
        <img src="../assets/footer_logo.png" alt="logo" />
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
    </div>
  </footer>
</template>

<style scoped>
footer {
  text-align: center;
  background-color: #2d2d2d;
  color: #ffffff;
  border-top: solid 12px rgb(35, 35, 35);
  padding: 24px;
}
#footer_container {
  display: flex;
  align-items: center;
  justify-content: center;
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
img{
  height: 100%;
  width: 100%;
}
#img_container {
  flex: 1;
  max-width: 360px;
}
#text_container {
  flex: 1;
}
@media (max-width: 900px) {
  #footer_container {
    flex-direction: column;
  }
}
.main {
  max-width: 1200px;
  margin: auto;
}
</style>
