<template>
    <div class="security">
        <header id="wx-header">
            <!--<div class="other"><span>添加朋友</span></div>-->
            <div class="center">
                <router-link to="/self/settings" tag="div" class="iconfont icon-return-arrow">
                    <span></span>
                </router-link>
                <span>帐号与安全</span>
            </div>
        </header>
        <section>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">微信号</div>
                    <div class="weui-cell__ft">C200812X</div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">手机号</div>
                    <div class="weui-cell__ft">18061735962</div>
                </div>
            </div>
            <div class="weui-cells">
              <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">微信密码</div>
                    <div class="weui-cell__ft">已设置</div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">声音锁</div>
                    <div class="weui-cell__ft">已开启</div>
                </div>
            </div>
            <div class="weui-cells">
              <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">应急联系人</div>
                    <div class="weui-cell__ft"></div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">登录设备管理</div>
                    <div class="weui-cell__ft"></div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">更多安全设置</div>
                    <div class="weui-cell__ft"></div>
                </div>
            </div>

            <div class="weui-cells">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">帮朋友冻结微信</div>
                    <div class="weui-cell__ft"></div>
                </div>
                <!-- <a class="weui-cell weui-cell_access"> -->
                  <!-- 请求微信安全 -->
                <a class="weui-cell weui-cell_access" href="https://weixin110.qq.com">
                    <div class="weui-cell__bd">微信安全中心</div>
                    <div class="weui-cell__ft"></div>
                </a>
            </div>
            <div class="weui-cells__tips">如果遇到帐号信息泄露, 忘记密码, 诈骗等帐号安全问题, 可前往微信安全中心.</div>
        </section>
    </div>
</template>
<script>
    export default {}

</script>
