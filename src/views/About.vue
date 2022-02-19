<template>
    <div>
        <PageTop :title="$t('about.title')" img="/src/assets/main.jpg"></PageTop>
        <div id="content" class="main">
            <div class="title" data-aos="zoom-in" data-aos-duration="600">一些标题</div>
            <div
                class="text"
                data-aos="zoom-in"
                data-aos-duration="600"
            >一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字</div>
            <div class="text" data-aos="zoom-in" data-aos-duration="600">一些文字</div>
            <div class="title" data-aos="zoom-in" data-aos-duration="600">一些标题</div>
            <div
                class="text"
                data-aos="zoom-in"
                data-aos-duration="600"
            >一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字</div>
            <div class="text" data-aos="zoom-in" data-aos-duration="600">一些文字</div>
        </div>
    </div>
</template>

<script setup>
import PageTop from "../components/PageTop.vue";
</script>

<style scoped>
/* desktop */
@media (min-width: 600px) {
    #content {
        padding: 40px;
    }
}
/* mobile */
@media (max-width: 600px) {
    #content {
        padding: 20px 40px 40px;
    }
}
#content {
    color: var(--main-text);
}

.title {
    font-weight: bold;
    font-size: 24px;
    margin: 20px 0px;
}
.text {
    font-size: 16px;
    line-height: 1.5;
    margin: 10px 0px;
}
</style>