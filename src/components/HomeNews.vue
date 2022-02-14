<template>
  <div class="main">
    <h1 class="title">N<span style="color: var(--baid-red);">E</span>WS</h1>
<!-- text left-->
    <div class="box">
      <img alt="" src="../assets/main.jpg">
      <div class="blocker" />
      <div class="content">
        <h2 class="n-title">TITLE</h2>
        <p class="n-note">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <br>      
      <div class="content">
        <h2 class="n-title">TITLE</h2>
        <p class="n-note">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div class="blocker" />
      <img alt="" src="../assets/main.jpg">
    </div>

  </div>

</template>

<script setup>

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
  object-fit: contain;
}
.n-title {
  font-size: 35px;
  margin-top: 0;
  margin-bottom: 5px;
}
.box {
  text-align:center;
  margin:0px 30px
}
.n-note {
  font-size: 20px;
  line-height: 30px;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 300px;
}
.box > img {
  width:40%;
  display:inline-block;
  vertical-align:middle; 
  border: #2b537a inset 3px;
  margin: 15px 0px;
}
.content {
  width: 50%;
  display:inline-block;
  vertical-align:middle; 
  padding: 15px 0px;
}
.title {
  text-align:left;
  color: var(--baid-blue);
  margin-left: 15px;
  font-size: 45px;
}
.blocker{
      display: inline-block;
      width:30px;
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
  }
  .title {
    margin-left: 20px;
  }
  .blocker{
    display:none;
  }

}
</style>
