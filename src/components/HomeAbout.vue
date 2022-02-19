<template>
  <div id="homeAbout">
    <!-- school overview -->
    <div id="bg">
      <div id="container" class="main">
        <div id="video" data-aos="fade-right" data-aos-duration="600">
          <video controls>
            <source src="../assets/Rocket.mp4" type="video/mp4" />Your browser does not support the video tag.
          </video>
        </div>
        <div id="information">
          <div
            class="about_title"
            data-aos="fade-left"
            data-aos-duration="600"
          >{{ $t("homeAbout.about_title") }}</div>
          <div class="about_text" data-aos="fade-left" data-aos-duration="600">
            北京中学，与首都同名。2013年，经北京市政府批准、由朝阳区政府主办的北京中学正式建校，备受社会各界关注。
            <br />2017年，为了满足部分学生和家长的多元化升学需求，搭建成长的立交桥，北京中学组建国际方向班级。学校坚持中国立场、开放多元、融合创新，基于课程改革特色实践，和美国格伦罗克高中共同开发了国际教育体系课程、包括高中基础课程、AP课程、特色选修课程，满足学生个性化发展需求。
            <router-link class="link" to="/about">{{ $t("common.read_more") }}</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- principle info -->
    <div id="principle" class="main">
      <div id="principle_speech">
        <div id="left" data-aos="fade-right" data-aos-duration="600">“</div>
        <div id="text" data-aos="zoom-in" data-aos-duration="600">STH FROM OUR DEAR CHERRY</div>
        <div id="right" data-aos="fade-left" data-aos-duration="600">”</div>
        <div id="principle_info" data-aos="zoom-in" data-aos-duration="600">——周慧 北京中学国际部校长</div>
      </div>
      <img
        class="pic shadow"
        src="../assets/cherry.png"
        alt="Cherry"
        data-aos="fade-left"
        data-aos-duration="600"
      />
    </div>
    <!-- school info -->
    <div id="school_info_container" class="shadow">
      <div
        id="school_info_title"
        class="main"
        data-aos="zoom-in"
        data-aos-duration="600"
      >{{ $t("homeAbout.school_info_title") }}</div>
      <div id="school_info" class="main">
        <div id="idea" class="info shadow" data-aos="zoom-in" data-aos-duration="600">
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
        <div id="courses" class="info shadow" data-aos="zoom-in" data-aos-duration="600">
          <div class="info_container">
            <div class="info_title">{{ $t("homeAbout.courses") }}</div>
            <div class="info_text">
              2017年，为了满足部分学生和家长的多元化升学需求，搭建成长的立交桥，北京中学组建国际方向班级。学校坚持中国立场、开放多元、融合创新。
              <br />
              <br />
              <router-link class="link" to="/about">{{ $t("common.read_more") }}</router-link>
            </div>
          </div>
        </div>
        <div id="faculty" class="info shadow" data-aos="zoom-in" data-aos-duration="600">
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
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;
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
  background-color: var(--baid-blue);
  padding: 40px;
  height: auto;
}

#school_info {
  display: flex;
  overflow-x: hidden;
  padding: 40px 0px 0px;
  align-items: center;
}

#school_info_title {
  margin: auto;
  text-align: center;
  font-weight: bold;
  font-size: 32px;
  color: white;
}
.info_container {
  padding: 40px;
}

.info_title {
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 16px;
  text-align: center;
  text-transform: uppercase;
}
.info_text {
  margin-top: 16px;
  font-size: 20px;
  line-height: 1.5;
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

  #courses {
    background: url("../assets/HBW05519.JPG") center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 40px 0px;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: darken;
  }

  .info {
    max-width: 500px;
    min-width: 300px;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: darken;
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
  #courses {
    background: url("../assets/HBW05519.JPG") center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0px 40px;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: darken;
  }
  .info {
    height: 500px;
  }
}
.info {
  flex: 1;
  color: white;
}
#idea {
  background: url("../assets/HBW05519.JPG") center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;
}
#faculty {
  background: url("../assets/HBW05519.JPG") center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;
}
.about_text {
  padding: 4px 0;
  line-height: 1.5;
  font-size: 20px;
  color: white;
}
.about_title {
  font-size: 32px;
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
  font-size: 20px;
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
  justify-content: center;
  color: var(--main-text);
}
/* #principle_pic {
  flex: 1;
} */
#left {
  font-size: 64px;
  align-self: flex-start;
  color: var(--baid-blue);
  font-weight: bold;
}
#text {
  font-size: 32px;
  align-self: center;
  padding: 0px 64px;
}
#right {
  font-size: 64px;
  align-self: flex-end;
  color: var(--baid-blue);
  font-weight: bold;
}
#principle_info {
  font-size: 20px;
  align-self: flex-end;
}
.pic {
  flex: 1;
  object-fit: cover;
  margin-left: 20px;
}
</style>
