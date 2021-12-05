<template>
  <div id="home_about">
    <div id="slogan"><span>Better Me, Better World</span></div>
    <div id="information">
      <div id="container">
        <div id="about_title">关于北京中学国际部</div>
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
</template>

<script>
</script>

<style scoped>
#home_about {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: auto;
}

@media screen and (max-width: 900px) {
  #home_about {
    display: block;
  }
  #slogan {
    height: 100px;
    line-height: 100px;
    background-color: #333333;
    color: #d3e5ff;
  }
}
#slogan {
  font-size: 20pt;
  font-weight: bold;
  text-align: center;
  align-content: center;
  flex: 1;
  letter-spacing: 2px;
}

#information {
  background-color: #2464a4;
  text-align: left;
  height: 100%;
  flex: 1;
  color: white;
}
#container {
  padding: 50px;
}
.about_text {
  padding: 4px 0;
  line-height: 30px;
  color: #e0e0e0;
}
#about_title {
  font-size: 16pt;
  font-weight: bold;
  margin-bottom: 16px;
}
.link {
  color: #aed5ff;
  text-decoration: none;
  transition: all .2s ease-in-out;
  display: block;
  margin-top: 10px;
}

.link:hover {
  color: #cee5ff;
}
.link:active {
  color: #64b3ff;
}
</style>
