<template>
<div>
    <div class="bg">
        <!-- 顶部 -->
        <header id="wx-header">
        <div class="center">
                <router-link to="/self/settings" tag="div" class="iconfont icon-return-arrow">
                    <span></span>
                </router-link>
                <span>插件</span>
            </div>
        </header>
        <div class="led">
            <div class="led-icon" > <img class="light" src="/Users/caoxiang/Downloads/vue-WeChat-master/src/assets/images/light.png" alt=""></div>
            <p class="led-title">欢迎使用微信插件</p>
        </div>
        <p class="text">这里有微信的新功能，你可以打开来使用。</p>
        <div class="content">
            <div class="line"></div>
            <p class="content-title">暂无功能可使用</p>
            <div class="line1"></div>
        </div>
        <p class="bottom">使用微信插件功能，即代表你同意</p>
        <p class="bottom1">《微信插件使用须知及协议》</p>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.bg{
    width: 100%;
    height: 736px;
    background-color: #efa453;
}
.top{
    display: flex;
}
.top-icon{
    margin-left: 10px;
    margin-top: 5px;
}
.top-title{
    color: #FFFFFF;
    font-size: 15px;
    margin-top: 5px;
    margin-left: 130px;
}
.led{
    display: flex;
}
.light{
  margin-left: 0px;
}
.led-icon{
  display: flex;
    margin-left: 90px;
    margin-top: 10px;
}
.led-title{
  margin-top: 30px;
  margin-left: 50px;
    color: #FFFFFF;
    font-size: 18px;
}
.text{
    color: #fef6e2;
    font-size: 12px;
    margin-top: 10px;
    margin-left: 100px;
}
.content{
    display: flex;
}
.content-title{
    color: #ffdec2;
    font-size: 12px;
    margin-top: 42px;
    margin-left: 10px;
}
.line{
    width: 30px;
    height: 1px;
    margin-left: 120px;
    margin-top: 50px;
    background-color: #ffdec2;
}
.line1{
    width: 30px;
    height: 1px;
    margin-left: 10px;
    margin-top: 50px;
    background-color: #ffdec2;
}
.bottom{
    color: #FFFFFF;
    font-size: 12px;
    margin-top: 400px;
    margin-left: 115px;
}
.bottom1{
    color: #745b55;
    font-size: 12px;
    margin-left: 130px;
}
</style>
