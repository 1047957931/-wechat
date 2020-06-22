<template>
    <!-- -->
    <div class="threeD">
        <div class="main">
            <header>🏥精神病院304病房💊</header>
            <!--<section class="dialogue-section">
                <div class="row clearfix" v-for="item in msgInfo.msg">
                    <img :src="item.headerUrl" class="header">
                    <p class="text" v-more>{{item.text}}</p>
                </div>
            </section>-->
            <section class="dialogue-section clearfix">
                <div class="row clearfix"><img src="https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg" class="header">
                    <p class="text">点击消息，唤醒消息操作菜单</p>
                </div>
                <div class="row clearfix"><img src="https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg" class="header">
                    <p class="text">点击空白处，操作菜单消失</p>
                </div>
                <div class="row clearfix"><img src="https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg" class="header">
                    <p class="text">容我三思</p>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
    export default {
        props: ["msgInfo"]
    }
</script>
<style>
    @import "../../assets/css/threeD.css";
</style>
