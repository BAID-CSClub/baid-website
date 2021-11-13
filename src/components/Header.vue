<template>
  <div id="frame">
    <span id="lable">
      <img id="logo" src="../assets/logo_white.png" />
    </span>
    <span id="menu">
      <span id="home_tab" class="tab"><a href="#">Home</a></span>
      <span id="about_tab" class="tab"> <a href="#">About</a></span>
      <span id="news_tab" class="tab"><a href="#">News</a></span>
      <span id="gallery_tab" class="tab"><a href="#">Gallery</a></span>
      <input id="search_bar" placeholder="Search..."/>
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

#logo {
  display: flex;
  text-align: middle;
  font-size: 24pt;
  font-weight: bold;
  color: #ffffff;
  width: 144px;
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
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 24px;
  padding-bottom: 24px;
}

.tab:hover {
  background-color: #2b537a;
}
.tab a {
  text-decoration: none;
  color: #ffffff;
}

#search_bar {
  border-radius: 8px;
  border: 1px solid grey;
  background: #ffffff;
  width: 200px;
  height: 36px;
  padding-left: 8px;
  padding-right: 8px;
  margin-left: 14px;
  font-size: 12pt;

}
</style>