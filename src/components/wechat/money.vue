<template>
<div>
    <div class="bg">
        <!-- 顶部 -->
        <header id="wx-header">
        <div class="center">
                <router-link to="/" tag="div" class="iconfont icon-return-arrow">
                    <span></span>
                </router-link>
                <span>二维码收款</span>
            </div>
        </header>
        <div class="led">
            <div class="led-icon" > <img class="light" src="https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/money.png" alt=""></div>

        </div>


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
    background-color: #e6b73e;
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
  width: 335px;
  height: 420px;
  margin-left: -50px;
  margin-top: 20px;
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
