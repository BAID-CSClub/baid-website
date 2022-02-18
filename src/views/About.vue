<template>
    <h1 id="AboveTitle">关<span style="color:#b63f34">于</span>我们</h1>
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
              <div id="idea1">
                <img src="../assets/idea1.svg" class="idea_b"/>
                <img src="../assets/idea1hover.svg" class="idea_child" id="idea1hover"/>
              </div>
              <div id="idea2">
                <img src="../assets/idea2.svg" class="idea_b"/>
                <img src="../assets/idea2hover.svg" class="idea_child" id="idea2hover"/>
              </div>
              <div id="idea3">
                <img src="../assets/idea3.svg" class="idea_b"/>
                <img src="../assets/idea3hover.svg" class="idea_child" id="idea3hover"/>
              </div>
              <div id="idea4">
                <img src="../assets/idea4.svg" class="idea_b"/>
                <img src="../assets/idea4hover.svg" class="idea_child" id="idea4hover"/>
              </div>
          </div>
    </div>
    <div id="ContentPart">
      <div id="ContentPart1">
          <UniversalNewsBlock></UniversalNewsBlock>
      </div>
      <div style="width:100%;height:360px"></div>
      <div id="ContentPart2">
          <h1 style="color:white;text-align:center;padding-top:50px;">教师风采</h1>
          <img src="../assets/main2.jpg" class="teachers"/>
          <img src="../assets/main2.jpg" class="teachers"/>
          <img src="../assets/main2.jpg" class="teachers"/>
          <div class="teacherstext"><h>123456789012345678923456789</h></div>
          <div class="teacherstext"><h>123456789012345678923456789</h></div>
          <div class="teacherstext"><h>123456789012345678923456789</h></div>
      </div>
    </div>
</template>

<script>
    import HeaderVue from '../components/Header.vue';
    import FooterVue from '../components/Footer.vue';
    import UniversalNewsBlock from '../components/UniversalNewsBlock.vue';
    import HomeGallery from '../components/HomeGallery.vue';
    export default{
        components:{
            HeaderVue,
            UniversalNewsBlock,
            HomeGallery,
            FooterVue,
        },
    };
</script>

<style scoped>
  #idea1hover{
    margin-top: -500px;
    margin-bottom: 29px;
    margin-left:-26px;
    margin-right:-10px;
  }
  #idea2hover{
    margin-top: -993px;
    margin-bottom: 130px;
    margin-left:36px;
    margin-right:-55px;
  }
  #idea3hover{
    margin-top: -500px;
    margin-bottom: 29px;
    margin-left:36px;
    margin-right:-50px;
  }
  .idea_child{
    position:relative;
    margin-top: 0px;
    margin-bottom: -25px;
    margin-left:-268px;
    margin-right:0px;
    z-index:9;
    opacity: 0;
    transition:all 0.3s ease-in;
  }
  .idea_b{
    position:relative;
    z-index:11;
    transition:all 0.3s ease-out;
  }
  .idea_b:hover{
    opacity: 0;
  }
  .idea_b:hover + .idea_child{
    opacity:1;
  }
  #AboveTitle{
    margin-left: 100px;
    font-size: 60px;
    color: #2464a4;
    opacity: 1!important;
    height: fit-content;
    
    bottom: 30px;
  }
  .UnderLine{
    border-bottom-style: solid;
    border-bottom-color: gray;
    border-bottom-width: 2px;
    font-size: 30px;
  }
  #BodyPart{

    height: 800px;
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
  #idea1{
    position:relative;
    width:400px;
    height:400px;
    z-index:1;
    margin-left:20px;
    margin-right:-100px;
    margin-bottom: -20px;
  }
  #idea2{
    position:relative;
    z-index:4;
    width:200px;
    height:200px;
    margin-top:-396px;
    margin-left:150px;
    margin-right:-300px;
    margin-bottom: 0px;
  }
  #idea3{
    position:relative;
    z-index:4;
    width:200px;
    height:200px;
    margin-top:-50px;
    margin-left:150px;
    margin-right:-170px;
    margin-bottom: 0px;
  }
  #idea4{
    position:relative;
    z-index:2;
    width:400px;
    height:400px;
    margin-top:-115px;
    margin-right:-50px;
    margin-left: 20px;
    margin-bottom: 40px;
  }
  #BodyPart{
    padding-bottom: 0px;
  }
  #ContentPart{
    max-width: 1200px;
    width:100%;
    height:1200px;
    margin:auto;
  }
  #ContentPart1{
    box-shadow: 120px 0px 0px #2464a4,-120px 0px 0px #2464a4;
    width:100%;
    height:360px;
    background-color: #2464a4;
  }
  #ContentPart2{
    background-color: #2d2d2d;
    box-shadow: 120px 0px 0px #2d2d2d,-120px 0px 0px #2d2d2d;
    height: 500px;
  }
  .teachers{

    height:290px;
    width:385px;
    padding-right:12px;
    float:left;
  }
  .teacherstext{
    height:auto;
    width:385px;
    text-align: center;
    color:white;
    padding-right:12px;
    float:left;
  }
</style>



