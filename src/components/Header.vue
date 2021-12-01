<template>
  <div id="frame">
    <span id="lable">
      <img id="logo" src="../assets/logo.png" />
    </span>
    <span id="menu">
      <router-link id="home_tab" class="tab" to="/">Home</router-link>
      <router-link id="about_tab" class="tab" to="/about">About</router-link>
      <router-link id="news_tab" class="tab" to="/news">News</router-link>
      <router-link id="gallery_tab" class="tab" to="/gallery"
        >Gallery</router-link
      >
      <input id="search_bar" placeholder="Search..." />
    </span>
  </div>
</template>

<script>
</script>

<style scoped>
#frame {
  background-color: #ffffff;
  height: auto;
  width: auto;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: #333333 0 2px 10px;
  padding-left: 24px;
  padding-right: 24px;
  /*border-bottom: 5px solid #2464a4;*/
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
  transition: all .3s;
  font-size: 16pt;
  padding: 24px 14px;
  width: 80px;
}

.tab:hover {
  background-color: #2b537a;
  color: #dadada;
}
.tab {
  text-decoration: none;
  color: #444444;
}

#search_bar {
  border-radius: 8px;
  /*border: 1px solid grey;*/
  background: #ffffff;
  width: 200px;
  height: 36px;
  padding-left: 8px;
  padding-right: 8px;
  margin-left: 14px;
  font-size: 12pt;
  outline: 1px solid gray;
  border: none;
  box-shadow: 0 0 5px white;
  transition: all .3s;

}
#search_bar:focus {
  outline-color: #2464a4;
  box-shadow: 0 0 5px #888888;
}
</style>