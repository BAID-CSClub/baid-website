<script setup>
defineProps({
  msg1: String,
  msg2: String,
  msg3: String,
  msg4: String,
  msg5: String,
  msg6: String
})
</script>

<template>
<div>
    <footer>
      <FooterIcon>
        <img id="ICON" src="../assets/footer_logo.png">
      </FooterIcon>
      <Text v-cloak>
          <box>{{msg1}}</box>
          <box>{{msg2}}</box>
          <box>{{msg3}}</box>
          <box>{{msg4}}</box>
          <box>{{msg5}}</box>
          <box style="border-right:solid 2px grey;">{{msg6}}</box>
      </Text>
    </footer>
</div>
</template>

<style scoped>
    footer{
        position: relative;
        text-align: center;
        margin: 0px;
        width:94vw;
        background-color: #2d2d2d;
        min-height: 180px;
        color: rgb(228, 228, 228);
        padding: 0px 3vw 50px 3vw;
        border-top: solid 12px rgb(35, 35, 35);
    }
    FooterIcon{
        text-align: center;
        display: inline-block;
        height: 100%;
    }
    Text{
        display: inline-block;
        max-width: 64%;
        min-width:700px;
        position: relative;
        height: fit-content;
        text-align: center;
    }
    box{
        text-align: center;
        font-size: 16px;
        padding-left: 10px;
        padding-right: 10px;
        max-height: 15px;
        margin: 12px -2.5px 12px 0;
        border: 2px none grey;
        border-left-style: solid;
        white-space: nowrap;
        line-height: 25px;
    }
    #ICON{
        position: relative;
        display: inline-block;
        width: 350px;
    }
    @media screen and (min-width: 1100px){
        footer{
            height:210px;
            width:100vw;
            padding:0;
        }
        Text{
            transform:translateY(-45px);
        }
        #ICON{
            transform:translateY(25px)
        }
    }

</style>
<style>
[v-cloak] {
  display: none;
}
</style>
