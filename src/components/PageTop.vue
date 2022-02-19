<template>
    <div>
        <div id="head_pic" :style="{ 'background-image': 'url(' + img + ')' }"></div>
        <div class="main">
            <h1 id="page_title" class="shadow">{{ title }}</h1>
        </div>
    </div>
</template>

<style scoped>
/* desktop */
@media (min-width: 600px) {
    #page_title {
        display: inline;
        font-weight: bold;
        font-size: 32px;
        background-color: var(--baid-blue);
        color: white;
        padding: 20px 40px;
        margin: 0px 40px;
        text-transform: uppercase;
    }
    #head_pic {
        height: 400px;
    }
}
/* mobile */
@media (max-width: 600px) {
    #page_title {
        display: block;
        text-align: center;
        font-weight: bold;
        font-size: 32px;
        background-color: var(--baid-blue);
        color: white;
        padding: 20px 40px;
        text-transform: uppercase;
    }
    #head_pic {
        height: 40vw;
    }
}
#head_pic {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: darken;
}
#page_title {
    margin: 0px;
}
</style>

<script>
export default {
    props: ["img", "title"],
};
</script>