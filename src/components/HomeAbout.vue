<template>
  <div id="bg">
    <div id="bg_cover">
      <div id="container" class="main">
        <div id="video">
          <video controls>
            <source src="../assets/Rocket.mp4" type="video/mp4" />Your browser does not support the video tag.
          </video>
        </div>
        <div id="information">
          <div class="about_title">{{ $t("homeAbout.about_title") }}</div>
          <div class="about_text">
            北京中学，与首都同名。2013年，经北京市政府批准、由朝阳区政府主办的北京中学正式建校，备受社会各界关注。
            <br />2017年，为了满足部分学生和家长的多元化升学需求，搭建成长的立交桥，北京中学组建国际方向班级。学校坚持中国立场、开放多元、融合创新，基于课程改革特色实践，和美国格伦罗克高中共同开发了国际教育体系课程、包括高中基础课程、AP课程、特色选修课程，满足学生个性化发展需求。
          </div>
          <router-link class="link" to="/about">{{ $t("common.read_more") }}</router-link>
        </div>
      </div>
    </div>
  </div>
  <div id="principle" class="main">
    <div id="principle_speech">
      <div id="left">“</div>
      <div id="text">STH FROM OUR DEAR CHERRY</div>
      <div id="right">”</div>
      <div id="principle_info">——周慧 北京中学国际部校长</div>
    </div>
    <img class="pic" src="../assets/cherry.png" alt="Cherry" />
  </div>
  <div id="school_info_container">
    <div id="school_info_title" class="main">{{ $t("homeAbout.school_info_title") }}</div>
    <div id="school_info" class="main">
      <div id="idea" class="info">
        <div class="cover">
          <div class="info_container">
            <div class="info_title">{{ $t("homeAbout.idea") }}</div>
            <div class="info_text">
              2017年，为了满足部分学生和家长的多元化升学需求，搭建成长的立交桥，北京中学组建国际方向班级。学校坚持中国立场、开放多元、融合创新。
              <br />
              <br />
              <router-link class="link" to="/about">{{ $t("common.read_more") }}</router-link>
            </div>
          </div>
        </div>
      </div>
      <div id="environment" class="info">
        <div class="cover">
          <div class="info_container">
            <div class="info_title">{{ $t("homeAbout.environment") }}</div>
            <div class="info_text">
              2017年，为了满足部分学生和家长的多元化升学需求，搭建成长的立交桥，北京中学组建国际方向班级。学校坚持中国立场、开放多元、融合创新。
              <br />
              <br />
              <router-link class="link" to="/about">{{ $t("common.read_more") }}</router-link>
            </div>
          </div>
        </div>
      </div>
      <div id="faculty" class="info">
        <div class="cover">
          <div class="info_container">
            <div class="info_title">{{ $t("homeAbout.faculty") }}</div>
            <div class="info_text">
              2017年，为了满足部分学生和家长的多元化升学需求，搭建成长的立交桥，北京中学组建国际方向班级。学校坚持中国立场、开放多元、融合创新。
              <br />
              <br />
              <router-link class="link" to="/about">{{ $t("common.read_more") }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
#bg {
  background: url("../assets/HBW05519.JPG") center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 800px;
}

#bg_cover {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  display: flex;
  overflow: auto;
  align-items: center;
  justify-content: center;
}

#container {
  padding: 40px;
  display: flex;
  overflow: auto;
  align-items: center;
  justify-content: center;
}
#school_info_container {
  background-color: #2464a4;
  padding: 40px;
  height: auto;
}

#school_info {
  display: flex;
  overflow: auto;
  padding: 40px 0px 0px;
  align-items: center;
}

#school_info_title {
  margin: auto;
  text-align: center;
  font-weight: bold;
  font-size: 24pt;
  color: white;
}
.info_container {
  padding: 40px;
}
.cover {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
}

.info_title {
  font-weight: bold;
  font-size: 20pt;
  margin-bottom: 16px;
  text-align: center;
  text-transform: uppercase;
}
.info_text {
  margin-top: 16px;
  font-size: 14pt;
  line-height: 150%;
}

video {
  width: 100%;
  height: auto;
}
/* mobile version */
@media (max-width: 900px) {
  #bg {
    height: auto;
  }
  #container {
    flex-direction: column;
  }
  #video {
    height: 400px;
    flex: 1;
    margin: 0px 0px 40px;
    text-align: center;
  }
  #information {
    flex: 1;
    margin: 40px 0px 0px;
    text-align: left;
    color: white;
  }
  #school_info {
    flex-direction: column;
  }

  #environment {
    background: url("../assets/HBW05519.JPG") center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 40px 0px;
  }

  .info {
    flex: 1;
    max-width: 500px;
    min-width: 300px;
    color: white;
  }
  #principle {
    flex-direction: column;
    height: auto;
  }
  .pic {
    display: none;
  }
}

/* desktop version */
@media (min-width: 900px) {
  #video {
    flex: 1;
    margin-right: 40px;
    text-align: center;
  }
  #information {
    flex: 1;
    margin-left: 40px;
    text-align: left;
    color: white;
  }
  #environment {
    background: url("../assets/HBW05519.JPG") center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0px 40px;
  }
  .info {
    flex: 1;
    height: 500px;
    color: white;
  }
}
#idea {
  background: url("../assets/HBW05519.JPG") center;
  background-repeat: no-repeat;
  background-size: cover;
}
#faculty {
  background: url("../assets/HBW05519.JPG") center;
  background-repeat: no-repeat;
  background-size: cover;
}
.about_text {
  padding: 4px 0;
  line-height: 30px;
  font-size: 14pt;
  color: #e0e0e0;
}
.about_title {
  font-size: 24pt;
  font-weight: bold;
  margin-bottom: 16px;
  text-transform: uppercase;
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
  overflow: auto;
  height: auto;
  align-items: center;
  padding: 40px;
}
#principle_speech {
  flex: 4;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  color: #2d2d2d;
  justify-content: center;
}
/* #principle_pic {
  flex: 1;
} */
#left {
  font-size: 48pt;
  align-self: flex-start;
  color: #2464a4;
  font-weight: bold;
}
#text {
  font-size: 20pt;
  align-self: center;
  padding: 0px 64px;
}
#right {
  font-size: 48pt;
  align-self: flex-end;
  color: #2464a4;
  font-weight: bold;
}
#principle_info {
  font-size: 16pt;
  align-self: flex-end;
}
.pic {
  flex: 1;
  object-fit: cover;
  margin-left: 20px;
}

.main {
  max-width: 1200px;
  margin: auto;
}
</style>
