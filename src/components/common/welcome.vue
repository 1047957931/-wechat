<template>
    <div class="welcome" :class="{hide:hide}">
        <img src="https://sinacloud.net/vue-wechat/images/welcome.jpg" alt="">
    </div>
</template>
<script>
export default {
    data() {
            return {
                hide: false
            }
        },
        mounted() {
            setTimeout(() => {
                this.hide = true
            }, 1000)
        }
}
</script>
<style>

.welcome {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 6;
    background: #000b17;
    animation: welcome 0.5s;
    transition: 0.3s;
    -webkit-transition: 0.3s;

}

.welcome img {
    width: 100%;
}
.welcome.hide{
    opacity: 0;
    visibility: hidden;
}


</style>
