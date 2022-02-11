<template>
  <div class="main">
    <h1 class="title">N<span style="color: brown;">E</span>WS</h1>
<!-- text left-->
    <div class="box">
      <img alt="" :src="mainJPG">
      <div class="content">
        <h2 class="n-title">TITLE</h2>
        <p class="n-note">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

    </div>

  </div>

</template>

<script setup>
import mainJPG from "../assets/main.jpg";

const news = [
  {

  }
]
</script>

<style scoped>
.main {
  margin-bottom: 40px;

}
img {
  object-fit: cover;
}
.n-title {
  font-size: 40px;
  margin-top: 0;
  margin-bottom: 5px;
}
.box {
  display: flex;
}
.n-note {
  font-size: 20px;
  line-height: 30px;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 300px;
}
.box > img {
  width: 50%;
  border: #2b537a inset 3px;
  margin-left:30px;
}
.content {
  width: 50%;
  padding: 30px;
}
.title {
  text-align: left;
  color: #4a698d;
  /*margin-left: 5px;*/
  font-size: 40px;
}

@media screen and (max-width: 600px) {
  .box {
    flex-direction: column;
    align-items: center;
  }
  .content {
    width: 90%;
  }
  .box > img {
    width: 90%;
    margin-left: 0;
  }
  .title {
    margin-left: 20px;
  }

}
</style>
