<template>
    <div>
        <div id="head_pic"></div>
        <div class="main">
            <div id="page_title" class="shadow">{{ $t("contact.title") }}</div>
            <div id="content">
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
    </div>
</template>
<script>

</script>

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
    #content {
        padding: 40px;
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
    #content {
        padding: 20px 40px 40px;
    }
    #head_pic {
        height: 40vw;
    }
}
#content {
    color: var(--main-text);
}
#head_pic {
    background: url("../assets/main.jpg") center no-repeat;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: darken;
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