<script setup>
    const props = defineProps({
        gallary1: String,
        gallary2: String,
        gallary3: String,
        gallary4: String,
        gallary5: String,
        gallary6: String,
        gallary7: String,
        gallary8: String
    })
</script>
<template>
    <div id="gallary">
            <div class=rank>
                <img :src="props.gallary1" alt="Image">
                <img :src="props.gallary8" alt="Image">
                <img :src="props.gallary5" alt="Image">
            </div>
            <div class=rank>
                <img :src="props.gallary2" alt="Image">
                <img :src="props.gallary7" alt="Image">
                <img :src="props.gallary1" alt="Image">
                <img :src="props.gallary6" alt="Image">
                <img :src="props.gallary7" alt="Image">
            </div>
            <div class=rank>
                <img :src="props.gallary3" alt="Image">
                <img :src="props.gallary8" alt="Image">
                <img :src="props.gallary5" alt="Image">
                <img :src="props.gallary1" alt="Image">
                <img :src="props.gallary4" alt="Image">
                
            </div>
            <div class=rank>
                <img :src="props.gallary4" alt="Image">
                <img :src="props.gallary6" alt="Image">
                <img :src="props.gallary1" alt="Image">
            </div>
            <div class=rank style="margin-right: 1%;">
                <img :src="props.gallary5" alt="Image">
                <img :src="props.gallary7" alt="Image">
                <img :src="props.gallary2" alt="Image">
                <img :src="props.gallary8" alt="Image">
            </div>
    </div>
</template>
<style scoped>
    #gallary{
        background:black;
    }
    img{
        width: 100%;
        margin-bottom: 1vw;
        transition: all 0.1s ease-in;
        transform: scale(100%);
    }
    .rank{
        display:inline-block;
        width: 18.4vw;
        margin-left: 1vw;
        margin-top: 1vw;
        margin-bottom:1vw;
        min-height: 100px;
        max-height: 52vw;
        overflow:clip;
        vertical-align: top;
    }
    body{
        background-color: black;
        margin: 0px;
    }
    img:hover{
        transform: scale(105%);
    }
</style>
