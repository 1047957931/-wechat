<template>
  <!--我 组件-->
  <div id="self">
    <header id="wx-header">
      <div class="center">
        <router-link to="/explore/moments" tag="div" class="iconfont icon-return-arrow">
          <span>发现</span>
        </router-link>
        <span>朋友圈</span>
      </div>
    </header>
    <div class="weui-tab__content" style="display: block;">
      <div class="weui-cells">
        <router-link to="/self/profile"
        class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/Head.png" alt="" class="self-header">
          </div>
          <div class="weui-cell__bd">
            <h4 class="self-nickname">羊习习</h4>

            <p class="self-wxid">微信号: C200812X</p>
            <p class="self-wxid">地区：江苏 南京</p>
          </div>

        </router-link>
      </div>
      <div class="weui-cells">
                    <div class="weui-cell">
                        <div class="weui-cell__bd" style="text-align:center">发消息</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                </div>



    </div>
  </div>
</template>
<script>
    export default {}
</script>
<style>
    @import "../../assets/css/explore.css";
</style>
