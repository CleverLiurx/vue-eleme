<template>
    <div class="welcome">
        <div class="count-down-time">
            <span>{{second}}</span>
        </div>
        <div class="tips">
            <img src="../assets/welcome.png" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Welcome',
    data() {
        return {
            timer: null,
            second: 5
        };
    },
    created() {
        sessionStorage.setItem('enter_flag', true);
        this.countDownTime();
    },
    methods: {
        countDownTime() {
            this.timer = setInterval(() => {
                this.second--;
                if (this.second == 0) {
                    if(this.isWeiXin()) {
                        const url = 'https://payjx.cn/api/openid?mchid=1568951701&callback_url=http://eleme.woyou.cool/home';
                        window.location.href = url + '?timestamp=' + ((new Date()).getTime() + Math.random());
                    } else {
                        this.$router.push('/home');
                    }
                    clearInterval(this.timer);
                }
            }, 1000);
        },
        isWeiXin() {
            var ua = window.navigator.userAgent.toLowerCase();
            return ua.match(/MicroMessenger/i) == 'micromessenger';
        }
    }
};
</script>

<style scoped>
.welcome {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #fff;
}
.count-down-time {
    width: 8vw;
    height: 8vw;
    position: fixed;
    top: 3%;
    right: 3%;
    border: 2px solid #ccb;
    border-radius: 50%;
    font-size: 0.2rem;
    font-weight: 600;
    color: #009eef;
    line-height: 8vw;
    text-align: center;
}
.tips {
    width: 100%;
}
.tips img {
    display: block;
    width: 90%;
    padding-top: 15%;
    margin: 0 auto;
}
</style>
