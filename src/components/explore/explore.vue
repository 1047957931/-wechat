<template>
  <!--发现组件-->
  <div id="explore">
    <section>
      <div class="weui-cells">
        <router-link
          to="/explore/moments"
          class="weui-cell weui-cell_access"
          tag="div"
          v-on:click.native="momentNewMsg=false"
        >
          <div class="weui-cell__hd">
            <img src="../../assets/images/find_icon-circle.png" />
          </div>
          <div class="weui-cell__bd" style="line-height: 28px;">朋友圈</div>
          <div class="weui-cell__ft">
            <div class="home__notice" v-show="momentNewMsg">
              <img src="https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/Head.png" alt class />
              <i class="new-msg-dot"></i>
            </div>
          </div>
        </router-link>
      </div>
      <div class="weui-cells">
        <router-link
          to="/explore/video"
          class="weui-cell weui-cell_access"
          tag="div"
          v-on:click.native="momentNewMsg=false"
        >
          <div class="weui-cell__hd">
            <img src="../../assets/images/find_icon-video.png" />
          </div>
          <div class="weui-cell__bd" style="line-height: 28px;">视频号</div>
          <div class="weui-cell__ft"></div>
        </router-link>
      </div>
      <div class="weui-cells">
        <div class="weui-cell weui-cell_access" id="scanCell">

          <div class="weui-cell__hd">
            <img src="../../assets/images/find_icon-qrcode.png" />
          </div>
          <div class="weui-cell__bd" style="line-height: 28px;">扫一扫</div>
          <div class="weui-cell__ft"></div>
        </div>
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/find_icon-shake.png" />
          </div>
          <div class="weui-cell__bd" style="line-height: 28px;">摇一摇</div>
          <div class="weui-cell__ft"></div>
        </div>
      </div>
      <div class="weui-cells">
        <div class="weui-cell weui-cell_access" id="scanCell">
          <div class="weui-cell__hd">
            <img src="../../assets/images/find_icon-look.png" />
          </div>
          <div class="weui-cell__bd" style="line-height: 28px;">看一看</div>
          <div class="weui-cell__ft"></div>
        </div>
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/find_icon-search.png" />
          </div>
          <div class="weui-cell__bd" style="line-height: 28px;">搜一搜</div>
          <div class="weui-cell__ft"></div>
        </div>
      </div>
      <div class="weui-cells">
        <div class="weui-cell weui-cell_access" id="scanCell">
          <div class="weui-cell__hd">
            <img src="../../assets/images/find_icon-nearby.png" />
          </div>
          <div class="weui-cell__bd" style="line-height: 28px;">附近的人</div>
          <div class="weui-cell__ft"></div>
        </div>
      </div>

      <div class="weui-cells">
        <a href="http://wq.jd.com" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/find_icon-shopping.png" />
          </div>
          <div class="weui-cell__bd" style="line-height: 28px;">购物</div>
          <div class="weui-cell__ft"></div>
        </a>
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/find_icon-game.png" />
          </div>
          <div class="weui-cell__bd" style="line-height: 28px;">游戏</div>
          <div class="weui-cell__ft"></div>
        </div>
      </div>
      <div class="weui-cells">
        <div class="weui-cell weui-cell_access" id="scanCell">
          <div class="weui-cell__hd">
            <img src="../../assets/images/find_icon-applets.png" />
          </div>
          <div class="weui-cell__bd" style="line-height: 28px;">小程序</div>
          <div class="weui-cell__ft"></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  mixins: [window.mixin],
  data() {
    return {
      pageName: "发现",
      momentNewMsg: true
    };
  },
  activated() {
    this.$store.commit("toggleTipsStatus", -1);
  }
};
</script>
<style>
@import "../../assets/css/explore.css";
</style>
