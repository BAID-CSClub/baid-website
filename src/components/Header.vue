<template>
  <div id="frame">
    <span id="label">
      <img id="logo" src="../assets/logo.png"  alt=""/>
    </span>
    <span id="menu">
      <router-link id="home_tab" class="tab" to="/" >Home</router-link>
      <router-link id="about_tab" class="tab" to="/about">About</router-link>
      <router-link id="news_tab" class="tab" to="/news">News</router-link>
      <router-link id="gallery_tab" class="tab" to="/gallery">Gallery</router-link>
      <input id="search_bar" placeholder="Search..." />
      <span class="menu-icon">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 448 512" class="icon"><path fill="currentColor" d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"></path></svg>
      </span>
    </span>
    <div class="menu-mask">

    </div>
  </div>
</template>

<script setup>

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
  text-align: center;
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
  transition: all 0.3s;
  font-size: 16pt;
  padding: 24px 14px;
  width: 80px;
  text-decoration: none;
  color: #444444;
  text-align: center;
}
.tab::after {
  content: '';
  display: block;
  position: absolute;
  width: 0;
  background-color: #aed5ff;
  height: 5px;
  margin-left: 25px;
  margin-top: 5px;
  transition: width .3s ease-in-out;
  border-radius: 3px;
}
.router-link-active::after {
  width: 30px;
}

.tab:hover {
  background-color: #4776a1;
  color: #ffffff;
  transition: background-color .3s ease-in-out, color .3s ease-in-out;
}
.tab:active {
  background-color: #2b537a;
  color: #d2d2d2;

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
  transition: all 0.3s;
}
#search_bar:focus {
  outline-color: #2464a4;
  box-shadow: 0 0 5px #888888;
}
@keyframes fade {
  from {
    width: auto;
    opacity: 1;
  }
  to {
    width: 0;
    opacity: 0;
  }
}

.menu-icon {
  opacity: 0;
  width: 0;
  height: 25px;
  color: #595959;
  margin-left: 25px;
  padding-bottom: 3px;
  transition: all .2s;
}
@media (max-width: 900px) {
  .tab {
    opacity: 0;
    width: 0;
  }
  .menu-icon {
    width: 25px;
    opacity: 1;
  }
}
</style>
