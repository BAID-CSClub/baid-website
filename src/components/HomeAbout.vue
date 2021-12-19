<template>
  <div id="bg">
    <div id="container">
      <div id="video">
        <video width="480" height="270" controls>
          <source src="../assets/Rocket.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div id="information">
        <div id="about_title">这里是北京中学国际部</div>
        <div class="about_text">
          北京中学，与首都同名。2013年，经北京市政府批准、由朝阳区政府主办的北京中学正式建校，备受社会各界关注。
        </div>
        <div class="about_text">
          2017年，为了满足部分学生和家长的多元化升学需求，搭建成长的立交桥，北京中学组建国际方向班级。学校坚持中国立场、开放多元、融合创新，基于课程改革特色实践，和美国格伦罗克高中共同开发了国际教育体系课程、包括高中基础课程、AP课程、特色选修课程，满足学生个性化发展需求。
        </div>
        <router-link class="link" to="/about">了解更多</router-link>
      </div>
    </div>
  </div>
  <div id="principle">
    <div id="principle_speech">
      <div id="left">“</div>
      <div id="text">STH FROM OUR DEAR CHERRY</div>
      <div id="right">”</div>
      <div id="principle_info">——周慧 北京中学国际部校长</div>
    </div>
    <div id="principle_pic">
      <img class="pic" src="../assets/cherry.png" alt="Cherry" />
    </div>
  </div>
  <div id="school_info"></div>
</template>

<script>
</script>

<style scoped>
#bg {
  background: url("../assets/HBW05519.JPG") center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

#container {
  display: flex;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  height: 800px;
  align-items: center;
  justify-content: center;
}
#video {
  flex: 1;
  padding: 50px;
  padding-left: 100px;
  text-align: center;
}
#information {
  flex: 1;
  padding: 50px;
  padding-right: 100px;
  text-align: left;
  color: white;
  min-width: 400px;
}
.about_text {
  padding: 4px 0;
  line-height: 30px;
  font-size: 14pt;
  color: #e0e0e0;
}
#about_title {
  font-size: 24pt;
  font-weight: bold;
  margin-bottom: 16px;
}
.link {
  color: #aed5ff;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  display: block;
  margin-top: 10px;
}

.link:hover {
  color: #cee5ff;
}
.link:active {
  color: #64b3ff;
}

#principle {
  display: flex;
  height: 300px;
}
#principle_speech {
  flex: 4;
  padding: 50px;
  display: flex;
  flex-direction: column;
  color: #2d2d2d;
  justify-content: center;
}
#principle_pic {
  flex: 1;
}
#left {
  font-size: 32pt;
  align-self: flex-start;
  color: #2464a4;
  font-weight: bold;
}
#text {
  font-size: 20pt;
  align-self: center;
}
#right {
  font-size: 32pt;
  align-self: flex-end;
  color: #2464a4;
  font-weight: bold;
}
#principle_info {
  font-size: 16pt;
  align-self: flex-end;
}
.pic {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
