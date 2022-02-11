<template>
  <div id="frame">
    <span id="label">
      <img id="logo" src="../assets/logo.png" alt @click="$router.push({ name: 'Index' })" />
    </span>
    <span id="menu">
      <router-link id="home_tab" class="tab" to="/">{{ $t("header.home") }}</router-link>
      <router-link id="about_tab" class="tab" to="/about">{{ $t("header.about") }}</router-link>
      <router-link id="news_tab" class="tab" to="/news">{{ $t("header.news") }}</router-link>
      <router-link id="gallery_tab" class="tab" to="/gallery">{{ $t("header.gallery") }}</router-link>

      <input id="search_bar" :placeholder="$t('common.search')" />
      <span id="menu_icon" class="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          viewBox="0 0 448 512"
          class="icon"
        >
          <path
            fill="currentColor"
            d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
          />
        </svg>
      </span>
      <span id="translate_icon" class="icon" @click="changeLanguage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"
          />
        </svg>
      </span>
    </span>
    <div class="menu-mask"></div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();

function changeLanguage() {
  if (localStorage.getItem('lang') == 'en-US') {
    localStorage.setItem('lang', 'zh-CN');
    locale.value = 'zh-CN';
  }
  else {
    localStorage.setItem('lang', 'en-US');
    locale.value = 'en-US';
  }
}
</script>

<style scoped>
#frame {
  background-color: #ffffff;

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
  max-height: 81.2px;
  overflow-y:clip;
}

.tab {
  transition: all 0.3s;
  font-size: 16pt;
  padding: 25px 14px;
  width: 100px;
  text-decoration: none;
  color: #444444;
  text-align: center;
}
.tab::after {
  content: "";
  display: block;
  position: absolute;
  width: 0;
  background-color: #aed5ff;
  height: 5px;
  margin-left: 30px;
  margin-top: 5px;
  transition: width 0.3s ease-in-out;
  border-radius: 3px;
}
.router-link-active::after {
  width: 40px;
}

.tab:hover {
  background-color: #4776a1;
  color: #ffffff;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
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
  padding: 0px 8px;
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

#menu_icon {
  opacity: 0;
  width: 0;
  height: 25px;
  color: #595959;
  margin-left: 25px;
  padding-bottom: 3px;
  transition: all 0.2s;
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
