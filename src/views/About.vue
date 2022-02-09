<template>
    <div id="Background">
        <div id="UpperPart">
             <h1 id="AboveTitle">关<span style="color:#b63f34">于</span>我们</h1>
        </div>
        
    </div>
    <div id="BodyPart">
          <div id="LeftPart">
            <div id="Text" >
              <p class="UnderLine">测试文本测试文本</p>
              <p class="UnderLine">测试文本测试文本</p>
              <p class="UnderLine">测试文本测试文本</p>
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
            <div id="TopPart">
              <div class="Section" id="TopLeft">
                <p class="SectionText">测试文本1</p>
              </div>
              <div class="Section" id="TopRight">
                <p class="SectionText">测试文本2</p>
              </div>
            </div>
            <div id="BottomPart">
              <div class="Section" id="BottomLeft"><p class="SectionText">测试文本3</p></div>
              <div class="Section" id="BottomRight"><p class="SectionText">测试文本4</p></div>
            </div>
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
  .UnderLine{
    border-bottom-style: solid;
    border-bottom-color: gray;
    border-bottom-width: 2px;
    font-size: 30px;
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
    
    float: left;
  }
  #RightPart{
    margin-left: 50px;
    background: url("../assets/ideasvg.svg") center no-repeat;
    width: 500px;
    height: 500px;
    float: right;
  }
  #Slogan{
    border-top-style: solid;
    border-top-color: #b63f34;
    border-top-width: 6px;
    padding-top: 10px;
    font-weight: bold;
    font-size: 45px;
    margin: 10px;
  }
  #Idea{
    transform: scale(1.3);
  }
  #TopPart{
    height: 250px;
    width: 500px;
  }
  #BottomPart{
    height: 250px;
    width: 500px;
  }
  .Section{
    height: 100%;
    width: 50%;
    padding:0px;
    margin: 0px;
  }
  .Section:hover{
    background-color: white;
    box-shadow: 10px 10px 8px #888888;
  }
  .Section:hover .SectionText{
    display:block;
    text-align:center;
  }
  .SectionText{
    align-content: center;
    text-align: center;
    display: none;
  }
  #TopLeft{
    float: left;
  }
  #TopRight{
    float: right;
  }
  #BottomLeft{
    float:left;
  }
  #BottomRight{
    float: right;
  }
</style>



