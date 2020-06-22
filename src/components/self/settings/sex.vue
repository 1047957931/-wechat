<template>
    <!--设置 组件-->
    <div class="setting">
        <header id="wx-header">
            <div class="center">
                <router-link to="/self/profile" tag="div" class="iconfont icon-return-arrow">
                    <span></span>
                </router-link>
                <span></span>
            </div>
        </header>
        <section>
            <div class="weui-cells">
              <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">性别</div>
                    <div class="weui-cell__ft">男</div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">地区</div>
                    <div class="weui-cell__ft">江苏 南京</div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">个性签名</div>
                    <div class="weui-cell__ft">未填写</div>
                </div>

            </div>

        </section>
    </div>
</template>
<script>
    export default {}
</script>
