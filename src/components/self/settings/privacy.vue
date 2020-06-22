<template>
    <div class="privacy">
        <header id="wx-header">
            <!--<div class="other"><span>添加朋友</span></div>-->
            <div class="center">
                <router-link to="/self/settings" tag="div" class="iconfont icon-return-arrow">
                    <span>设置</span>
                </router-link>
                <span>隐私</span>
            </div>
        </header>
        <section>
            <div class="weui-cells__title"></div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">加我为朋友时需要验证</div>
                    <div class="weui-cell__ft"><input type="checkbox" class="weui-switch"></div>
                </div>
            </div>

            <div class="weui-cells">
              <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">添加我的方式</div>
                    <div class="weui-cell__ft"></div>
                </div>
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">向我推荐通讯录朋友</div>
                    <div class="weui-cell__ft"><input type="checkbox" class="weui-switch" checked=""></div>
                </div>
            </div>
            <div class="weui-cells__tips">开启后，为你推荐已经开通微信的手机联系人</div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">通讯录黑名单</div>
                    <div class="weui-cell__ft"></div>
                </div>
            </div>

            <div class="weui-cells__title">朋友圈和视频动态</div>
            <div class="weui-cells">
              <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">不让他(她)看</div>
                    <div class="weui-cell__ft"></div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">不让他(她)</div>
                    <div class="weui-cell__ft"></div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">允许朋友查看朋友圈的范围</div>
                    <div class="weui-cell__ft">最近半年</div>
                </div>
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">允许陌生人查看十张照片</div>
                    <div class="weui-cell__ft"><input type="checkbox" class="weui-switch" checked=""></div>
                </div>
            </div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">授权管理</div>
                    <div class="weui-cell__ft"></div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    export default {}

</script>
