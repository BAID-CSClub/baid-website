<template>
    <div id="Background">
        <div id="UpperPart">
             <h1 id="AboveTitle">关<span style="color:#b63f34">于</span>我们</h1>
        </div>
        
    </div>
    <div id="BodyPart">
          <div id="LeftPart">
            <div id="Text">
              <p>测试文本测试文本</p>
              <br>
              <p>测试文本测试文本</p>
              <br>
            </div>
            <div id="Slogan">
              <p style="color:#b63f34;margin:2px">BETTER</p>
              <p style="color:#b63f34;margin:2px">ME</p>
              <p style="color:#2464a4;margin:2px">BETTER</p>
              <p style="color:#2464a4;margin:2px">WORLD</p>
            </div>
          </div>
          <div id="RightPart">
            <img src="../assets/cherry.png">
          </div>
    </div>
</template>

<script>
    import HeaderVue from '../components/Header.vue';
    import FooterVue from '../components/Footer.vue';

    export default{
        components:{
            HeaderVue,
            FooterVue,
        },
    };
</script>

<style scoped>
    #Background{
    background: url("../assets/main.jpg") center no-repeat;
    background-size: cover;
  }
  #UpperPart{
    background-image: linear-gradient(rgba(0,0,0,0.6), rgba(255,255,255,1));
    height: 1000px;
    color: white;
    display: flex;
        
  }
  #AboveTitle{
    margin-left: 100px;
    font-size: 60px;
    color: #2464a4;
    opacity: 1!important;
  }
  #Text{
    border-style: double;
    padding: 30px;
    border-width: 20px;
    border-radius: 15px;
  }
  #BodyPart{
    
    height: 1000px;
    padding: 10px;
    padding-bottom: 300px;
    display: flex;
    overflow: auto;
    align-items: center;
    justify-content: center;
    font-size: 36px;
  }
  #LeftPart{
    padding-right: 100px;
    float: left;
  }
  #RightPart{
    padding-left: 100px;
    padding-bottom: 300px;
    float: right;
  }
  #Slogan{
    padding-top: 10px;
    font-weight: bold;
    font-size: 45px;
    margin: 10px;
  }
</style>



