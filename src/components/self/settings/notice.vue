<template>
    <div class="notice">
        <header id="wx-header">
            <!--<div class="other"><span>添加朋友</span></div>-->
            <div class="center">
                <router-link to="/self/settings" tag="div" class="iconfont icon-return-arrow">
                    <span>设置</span>
                </router-link>
                <span>新消息通知</span>
            </div>
        </header>
        <section>
          <div class="weui-cells__title">微信未打开时</div>
            <div class="weui-cells">

                <div class="weui-cell">
                    <div class="weui-cell__bd">新消息通知</div>
                    <div class="weui-cell__ft"><input type="checkbox" class="weui-switch"></div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">语音和视频通话提醒</div>
                    <div class="weui-cell__ft"><input type="checkbox" class="weui-switch"></div>
                </div>
            </div>
            <div class="weui-cells">
              <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">通知显示消息详情</div>
                    <div class="weui-cell__ft"><input type="checkbox" class="weui-switch"></div>
                </div>

            </div>
            <div class="weui-cells__title">微信打开时</div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">声音</div>
                    <div class="weui-cell__ft"><input type="checkbox" class="weui-switch"></div>
                </div>
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">振动</div>
                    <div class="weui-cell__ft"><input type="checkbox" class="weui-switch" checked=""></div>
                </div>
            </div>
            <div class="weui-cells__title">更新提醒</div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">朋友圈</div>
                    <div class="weui-cell__ft"><input type="checkbox" class="weui-switch" checked=""></div>
                </div>
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">视频号</div>
                    <div class="weui-cell__ft"><input type="checkbox" class="weui-switch" checked=""></div>
                </div>
            </div>
            <div class="weui-cells__tips">关闭后, 朋友圈或视频号有新内容更新时， 界面下方的“发现页”切换按钮、 朋友圈或视频号入口不再出现红点提示</div>
        </section>
    </div>
</template>
