<template>
    <div>
        <div id="head_pic"></div>
        <div class="main">
            <div id="page_title">{{ $t("contact.title") }}</div>
            <div id="content">
                <div class="title">一些标题</div>
                <div
                    class="text"
                >一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字</div>
                <div class="text">一些文字</div>
                <div class="title">一些标题</div>
                <div
                    class="text"
                >一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字</div>
                <div class="text">一些文字</div>
            </div>
        </div>
    </div>
</template>
<script>

</script>

<style scoped>
#head_pic {
    background: url("../assets/main.jpg") center no-repeat;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: darken;
    height: 30vw;
}
#page_title {
    display: inline;
    font-weight: bold;
    font-size: 32px;
    background-color: var(--baid-blue);
    width: auto;
    color: white;
    padding: 20px 40px;
    text-transform: uppercase;
}
#content {
    padding: 40px 0px 40px;
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