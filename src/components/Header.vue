<template>
  <div id="frame">
    <span id="lable">BAID</span>
    <span id="menu">
      <span id="homepage_tab" class="tab"><a href="#">Homepage</a></span>
      <span id="news_tab" class="tab"><a href="#">News</a></span>
      <span id="about_tab" class="tab"> <a href="#">About Us</a></span>
      <span id="gallery_tab" class="tab"><a href="#">Gallery</a></span>
      <input>
    </span>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
#frame {
  background-color: #2464a4;
  height: auto;
  width: auto;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: grey 2px 2px 10px;
  padding-left: 24px;
  padding-right: 24px;
}

#lable {
  display: flex;
  text-align: middle;
  font-size: 24pt;
  font-weight: bold;
  color: #ffffff;
}

#menu {
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.tab {
  transition: 0.5s;
  font-size: 16pt;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 24px;
  padding-bottom: 24px;
}

.tab:hover {
  background-color: #294866;
}
.tab a {
  text-decoration: none;
  color: #ffffff;
}

input {
  border-radius: 2px;
  border: none;
  background: #ffffff;
  width: 200px;
  height: 30px;
  padding: 0px;
  margin-left: 12px;
}
</style>