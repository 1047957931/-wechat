<template>
<!--个人相册界面-->
    <div class="album">
        <header id="wx-header">
            <div class="center">
                <router-link to="/self" tag="div" class="iconfont icon-return-arrow">
                    <span>我</span>
                </router-link>
                <span>相册</span>
            </div>
        </header>
        <div class="home-pic">
            <div class="home-pic-base">
                <div class="top-pic">
                    <div class="top-pic-inner">
                        <img src="https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/Head.png">
                    </div>
                </div>
                <div class="top-name _ellipsis"></div>
            </div>
            <p class="sign"></p>
        </div>
        <section class="album-box clearfix">
            <div class="post-date">
                <b class="day">今天</b>
                <b class="month"></b>
            </div>
            <div class="post-content">
                <div class="tumb-box">
                    <img src="https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/take.png" alt="">

                </div>
                <div class="thumb-desc">

                    <p class="number"></p>
                </div>
            </div>
        </section>
        <section class="album-box clearfix">
            <div class="post-date">
                <b class="day">昨天</b>
                <b class="month"></b>
            </div>
            <div class="post-content">
                <div class="tumb-box">
                    <img src="https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/pyq.JPG" alt="">
                </div>
                <div class="thumb-desc">

                    <p class="number"></p>
                </div>
            </div>
        </section>
        <section class="album-box clearfix">
            <div class="post-date">
                <b class="day">17</b>
                <b class="month">6月</b>
            </div>
            <div class="post-content">
                <div class="tumb-box">
                    <img src="https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/pyq2.JPG" alt="">
                </div>
                <div class="thumb-desc">
                    ☔️🈚️🏀😠
                    <p class="number"></p>
                </div>
            </div>
        </section>
        <section class="album-box clearfix">
            <div class="post-date">
                <b class="day">17</b>
                <b class="month">6月</b>
            </div>
            <div class="post-content">
                <div class="tumb-box">
                    <img src="https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/pyq3.JPG" alt="">
                </div>
                <div class="thumb-desc">
                    好剧！！！
                    <p class="number"></p>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    export default {}
</script>
<style>
    @import "../../assets/css/album.css";
</style>
