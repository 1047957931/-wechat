<template>
    <!--手机联系人组件-->
    <div :class="{'search-open-contact':!$store.state.headerStatus}">
    <header id="wx-header">
            <div class="center">
                <router-link to="/contact/new-friends" tag="div" class="iconfont icon-return-arrow">
                    <span>新的朋友</span>
                </router-link>
                <span>通讯录朋友</span>
            </div>
        </header>
        <search></search>
        <section>
          <div class="weui-cells__title">☆ 星标朋友</div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd"><img src="https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/zhouzhou.png" class="home__mini-avatar___1nSrW"></div>
                    <div class="weui-cell__bd">
                        周周
                    </div>
                </div>
            </div>
            <div class="weui-cells__title">D</div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd"><img src="https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/ddp.JPG" class="home__mini-avatar___1nSrW"></div>
                    <div class="weui-cell__bd">
                        段东坡
                    </div>
                </div>
            </div>
            <div class="weui-cells__title">J</div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd"><img src="https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/jyx.JPG" class="home__mini-avatar___1nSrW"></div>
                    <div class="weui-cell__bd">
                        蒋亦心
                    </div>
                </div>
            </div>
            <div class="weui-cells__title">L</div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd"><img src="https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/lj.JPG" class="home__mini-avatar___1nSrW"></div>
                    <div class="weui-cell__bd">
                      刘杰
                    </div>
                </div>
            </div>
            <div class="weui-cells__title">W</div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd"><img src="https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/wzj.JPG" class="home__mini-avatar___1nSrW"></div>
                    <div class="weui-cell__bd">
                        王梓君
                    </div>
                </div>
            </div>
            <div class="weui-cells__title">Y</div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd"><img src="https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/head.png" class="home__mini-avatar___1nSrW"></div>
                    <div class="weui-cell__bd">
                        羊习习
                    </div>
                </div>
            </div>
            <div class="weui-cells__title">Z</div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd"><img src="https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/zwl.JPG" class="home__mini-avatar___1nSrW"></div>
                    <div class="weui-cell__bd">
                        周文龙
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import search from "../common/search"
    export default {
        mixins: [window.mixin],
        components: {
            search
        },
        data() {
            return {
                pageName: "通讯录朋友"
            }
        }
    }
</script>
