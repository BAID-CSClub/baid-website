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
              <div id="idea1" class="idea">
                <img src="../assets/idea1.svg"/>
                <img src="../assets/idea1hover.svg" class="idea_child" style="z-index:4"/>
              </div>
              <div id="idea2" class="idea">
                <img src="../assets/idea2.svg"/>
                <img src="../assets/idea2hover.svg" class="idea_child" style="z-index:3"/>
              </div>
              <div id="idea3" class="idea">
                <img src="../assets/idea3.svg"/>
                <img src="../assets/idea3hover.svg" class="idea_child" style="z-index:2"/>
              </div>
              <div id="idea4" class="idea">
                <img src="../assets/idea4.svg"/>
                <img src="../assets/idea4hover.svg" class="idea_child" style="z-index:1"/>
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
  .idea_child{
    margin-top: -500px;
    margin-bottom: 7px;
    margin-left:-46px;
    margin-right:50px;
    opacity: 0;
    transition:all 0.3s ease-in;
  }
  .idea_child:hover{
    opacity: 1;
  }
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
    margin-left:20px;
    margin-right:-100px;
    margin-bottom: -20px;
  }
  #idea2{
    margin-top:-250px;
    margin-left:100px;
    margin-right:-100px;
    margin-bottom: 0px;
  }
  #idea3{
    margin-top:-250px;
    margin-left:95px;
    margin-right:-100px;
    margin-bottom: 0px;
  }
  #idea4{
    margin-top:-280px;
    margin-right:-50px;
    margin-left: 20px;
    margin-bottom: 40px;
  }
</style>



