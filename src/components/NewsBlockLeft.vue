<script setup>
const props = defineProps(['content','title','imageurl','subtitle','link']);
</script>

<template>
      <div class="box">  
        <div class="content">
          <h2 class="n-title">{{title}}</h2>
          <h3 class="n-subtitle">{{subtitle}}</h3>
          <p class="n-note" @click="Jump">
            {{content}}
          </p>
        </div> 
      <div class="blocker" />
      <img :src="props.imageurl" alt="活动配图">
  </div>
</template>

<style scoped>
img {
  object-fit: contain;
}
.n-title {
  font-size: 35px;
  margin-top: 15px;
  margin-bottom: -5px;
}
.n-subtitle {
  font-size: 15px;
  color:gray;
  margin-top: 0px;
  margin-bottom: 5px;
}
.box {
  transform:translateX(1vw);
  text-align:center;
  margin:0px 30px;
}
.n-note {
  font-size: 20px;
  line-height: 30px;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 300px;
}
.n-note::after{
  content:"...";
}
.box > img {
  height:16vw;
  display:inline-block;
  vertical-align:middle; 
  border: #2b537a inset 3px;
  margin: 15px 0px;
  max-height:240px;
}
.content {
  width: 40%;
  display:inline-block;
  vertical-align:middle; 
  padding: 15px 0px;
  text-align:left;
  transform:translateX(2vw)
}
.blocker{
      display: inline-block;
      width:30px;
}
@media screen and (max-width: 800px) {
  .box {
    flex-direction: column;
    align-items: center;
    transform:none;
  }
  .content {
    text-align:center;
    width: 90%;
  }
  .box > img {
    height:auto;
    max-height:none;
    width: 80%;
  }
  .title {
    margin-left: 20px;
  }
  .blocker{
    display:none;
  }

}
</style>