<template>
<!--个人信息界面-->
    <div class="profile">
        <header id="wx-header">
            <div class="center">
                <router-link to="/self" tag="div" class="iconfont icon-return-arrow">
                    <span></span>
                </router-link>
                <span>个人信息</span>
            </div>
        </header>
        <div class="weui-cells">
            <div class="weui-cell" id="avatarCell">
                <div class="weui-cell__bd">
                    <p>头像</p>
                </div>
                <div class="weui-cell__ft">
                    <img src="https://vx-vue.oss-cn-hangzhou.aliyuncs.com/icon/Head.png" style="width: 50px;height: 50px;border-radius: 4px;">
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    名字
                </div>
                <div class="weui-cell__ft">
                    羊习习
                </div>

            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>微信号</p>
                </div>
                <div class="weui-cell__ft">
                    C200812X
                </div>
            </div>
            <router-link to="/self/profile/my-qrcode" class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">
                    <p>我的二维码</p>
                </div>
                <div class="weui-cell__ft">
                    <img src="../../assets/images/contact_add-friend-my-qr.png" style="vertical-align: middle;;width:24px" class="_align-middle">
                </div>
            </router-link>
            <div class="weui-cells">
                <router-link to="/self/settings/sex" class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">更多</div>
                    <div class="weui-cell__ft"></div>
                </router-link>
            </div>
        </div>



        <div class="weui-cells">
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">
                    <p>我的地址</p>
                </div>
                <div class="weui-cell__ft"></div>


            </div>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                pageName: "个人信息"
            }
        }
    }
</script>
