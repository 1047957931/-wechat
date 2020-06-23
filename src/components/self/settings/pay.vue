<template>
<div>
    <div class="bg">
        <!-- 顶部 -->
        <header id="wx-header">
        <div class="center">
                <router-link to="/self" tag="div" class="iconfont icon-return-arrow">
                    <span></span>
                </router-link>
                <span>支付</span>
            </div>
        </header>
        <div class="led">
            <div class="led-icon" > <img class="pay1" src="https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/pay1.png" alt=""></div>

        </div>
        <div class="led">
            <div class="led-icon" > <img class="pay2" src="https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/pay2.png" alt=""></div>

        </div>
        <div class="led">
            <div class="led-icon" > <img class="pay3" src="https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/pay3.png" alt=""></div>

        </div>
        <div class="led">
            <div class="led-icon" > <img class="pay4" src="https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/pay4.png" alt=""></div>

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
    height: 1100px;
    background-color: #ededed;
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
.pay1{
  width: 339px;
  height: 128px;
  margin-left: -50px;
  margin-top: -5px;
}
.pay2{
  width: 339px;
  height: 331px;
  margin-left: -50px;
  margin-top: -5px;
}
.pay3{
  width: 339px;
  height: 141px;
  margin-left: -50px;
  margin-top: -5px;
}
.pay4{
  width: 339px;
  height: 427px;
  margin-left: -50px;
  margin-top: -5px;
}
.led-icon{
  display: flex;
    margin-left: 90px;
    margin-top: 10px;
}
</style>
