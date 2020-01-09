<template>
    <div class="login">
        <div class="stitch-btn">
            <button @click="switchLoginType" :disabled="switchDisabled">{{ tips }} ></button>
        </div>
        <div class="logo">
            <img src="../../src/assets/logo.png" />
        </div>
        <!-- 手机号 -->
        <InputGroup
            type="number"
            v-model="phone"
            placeholder="手机号"
            :btnTitle="btnTitle"
            :disabled="disabled"
            :error="errors.phone"
            @btnClick="getVerifyCode"
        />
        <!-- 验证码 -->
        <InputGroup
            v-if="loginType == 0"
            type="number"
            v-model="code"
            placeholder="验证码"
            :error="errors.code"
        />
        <!-- 密码 -->
        <InputGroup v-else type="password" v-model="code" placeholder="密码" :error="errors.code" />
        <!-- 用户协议 -->
        <div class="login_des">
            <p>
                新用户登录即自动注册，表示已同意
                <span>《付钱不配送协议》</span>
                和
                <span>《仅供学习原则》</span>
            </p>
        </div>
        <!-- 登录按钮 -->
        <div class="login_btn">
            <button :disabled="loginDisabled" @click="toLogin">登录</button>
        </div>
        <div class="about-me">
            <span>联系作者</span>
        </div>
        <div class="records">
            <a href="http://www.beian.miit.gov.cn">冀ICP备19016004号</a>
        </div>
    </div>
</template>


<script>
import InputGroup from '../components/Basal/InputGroup';

export default {
    name: 'Login',
    data() {
        return {
            phone: '',
            code: '',
            errors: {},
            btnTitle: '获取验证码',
            disabled: false,
            loginType: 0,
            switchDisabled: false,
            tips: '密码登录'
        };
    },
    computed: {
        // loginDisabled() {
        //     if (!this.phone || !this.code) return true
        //     else return false
        // }
        loginDisabled: {
            get() {
                if (!this.phone || !this.code) return true;
                else return false;
            },
            set(_) {
                return _;
            }
        }
    },
    methods: {
        switchLoginType() {
            this.loginType = !this.loginType;
            this.code = '';
            if (this.loginType) {
                this.tips = '验证码登录';
                this.btnTitle = '';
            } else {
                this.tips = '密码登录';
                this.btnTitle = '获取验证码';
            }
        },
        toLogin() {
            // 登录
            this.errors = {};
            this.$api.handleLogin(this.phone, this.code, this.loginType)
                .then(res => {
                    // console.log(res.data);
                    localStorage.setItem('ele_login', res.data.user._id);
                    this.$store.dispatch('setUserInfo', res.data.user);
                    this.$router.push('/');
                })
                .catch(err => {
                    // console.log(err);
                    this.errors = {
                        code: err.response.data.msg
                    };
                });
        },
        getVerifyCode() {
            // 获取验证码
            if (this.phoneIsLawful()) {
                this.validateBtn();
                this.$api.getVerificationCode(this.phone)
                    .then(res => {
                        // console.log(res);
                    });
            }
        },
        phoneIsLawful() {
            // 验证手机号码
            if (!this.phone) {
                this.errors = {
                    phone: '手机号码不能为空'
                };
                return false;
            } else if (!/^1[3456789]\d{9}$/.test(this.phone)) {
                this.errors = {
                    phone: '请填写正确的手机号码'
                };
                return false;
            } else {
                this.errors = {};
                return true;
            }
        },
        validateBtn() {
            let time = 60;
            const timer = setInterval(() => {
                if (time == 0) {
                    clearInterval(timer);
                    this.btnTitle = '获取验证码';
                    this.disabled = false;
                    this.switchDisabled = false;
                } else {
                    this.btnTitle = time + '秒后重试';
                    this.disabled = true;
                    this.switchDisabled = true;
                    time--;
                }
            }, 1000);
        }
    },
    components: {
        InputGroup
    }
};
</script>
<style scoped>
.login {
    width: 100%;
    height: 100%;
    padding: 8vw;
    box-sizing: border-box;
    background: #fff;
}
.stitch-btn button {
    float: right;
    width: 29.87vw;
    color: #4d90fe;
    font-size: 0.16rem;
    text-align: right;
    line-height: 0.16rem;
    border: none;
    outline: none;
    background-color: #fff;
}
.stitch-btn button[disabled] {
    color: #999;
}
/* logo */
.logo {
    text-align: center;
    margin-top: 10vw;
}
.logo img {
    width: 25vw;
}
/* input button */
.text_group,
.login_des,
.login_btn {
    margin-top: 5.33vw;
}
.login_des {
    color: #aaa;
    line-height: 5.87vw;
}
.login_des span {
    color: #4d90fe;
}
.login_btn button {
    width: 100%;
    height: 10.67vw;
    background-color: #48ca38;
    border-radius: 4px;
    color: white;
    font-size: 0.14rem;
    border: none;
    outline: none;
}
.login_btn button[disabled] {
    background-color: #8bda81;
}
.about-me {
    width: 100%;
    text-align: center;
    margin-top: 8vw;
    color: #999;
}
.records {
    position: fixed;
    bottom: 2vh;
    left: 0;
    width: 100%;
    text-align: center;
}
.records a {
    color: #ccc;
    font-size: 0.15rem;
    text-decoration: none;
}
</style>
