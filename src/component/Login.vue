<template>
    <div class="login-container">
        <!-- <header class="mui-bar mui-bar-nav">
                <h1 class="mui-title">武昌区劳动监察</h1>
        </header> -->
        <div class="logo-container">
            <img src="../image/icon.png" class="logoimg-container">
            <div class="systeminfo-container">
                <p><span class="address">武汉市武昌区</span></p>
                <p style="margin-top: 5px;"><span class="systemname">人力资源局劳动监察系统</span></p>
            </div>
        </div>
        <div class="mui-content">
            <form class="mui-input-group" name="login">
                <div class="mui-input-row">
                    <label>帐号</label>
                    <input type="text" class="mui-input-clear" placeholder="请输入帐号名" v-model="username">
                </div>
                <div class="mui-input-row mui-password">
                    <label>密码</label>
                    <input type="password" class="mui-input-password" placeholder="请输入密码" v-model="password">
                </div>
            </form>
            <!-- 注意：登录按钮不能和账号密码输入框放在一个form里面 -->
            <div class="mui-content-padded" align="center">
                <mt-button type="primary" size="large" @click="login">登录</mt-button>
                <!-- <button type="button" class="mui-btn mui-btn-blue" id="login" @click="login">登录</button> -->
                <!-- <button type="button" class="mui-btn mui-btn-green" id="reg">注册</button> -->
            </div>
           
        </div>
        <img class="login-bottom-img" src="../image/loginbackground.png"></img>
    </div>
    
</template>
<script>
import { Toast } from "mint-ui";

export default{
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login(){
            if(this.username.length == 0){
                Toast("用户名不能为空");
                return;
            }
            if(this.password.length==0){
                Toast("密码不能为空");
                return;
            }
            // if(this.username=='admin'&&this.password=='1'){
            //     var user = {
            //         username: this.username,
            //         password: this.password,
            //     };
            //     localStorage.setItem("userinfo", JSON.stringify(user));
            //     sessionStorage.setItem("logged", true);
            //     this.$router.replace("/home");
            // }
            var str = {
                tm : new Date().getTime(),
                KEYDATA : "qq313596790fh" + this.username + ",fh," + this.password,
            }    
            this.$http.post('admin/check',str,{withCredentials: true}).then( result => {
                // console.log(result);
                if( result.body.result == "success"){
                    var user = {
                        username: this.username,
                        password: this.password,
                    };
                    localStorage.setItem("userinfo", JSON.stringify(user));
                    sessionStorage.setItem("logged", true);
                    if (window.history.length == 1){
                        console.log('/home')
                        this.$router.replace("/home");
                    }
                    else{
                        console.log("history");
                        this.$router.go(0-window.history.length+1); 
                    }
                }
                else{
                    Toast("用户名或密码错误");
                    this.password = "";
                    return;
                }
            }, error => {
                Toast("服务器连接失败");
                // this.$router.replace("/home");
            })
        },
        getHistoryInfo(){
            console.log("getHistoryInfo");
            if(localStorage.getItem("userinfo")){     
                var user = JSON.parse(localStorage.getItem("userinfo"));
                this.username = user.username;
                this.password = user.password;
            }
        }
    },
    created() {
        this.$emit("pageChanged");
        this.getHistoryInfo();
    },
    beforeRouteLeave (to, from , next) {
        if ((from.path == '/' || from.path == '/login') && to.path == "/home") {
            next()
        } else {
            next(false)
        }
    }
}
</script>
<style lang="scss" scoped>
.login-container{
    width: 100%;
    overflow: auto;
    background-color: #fff;
    .mui-content{
        position: fixed;
        top: 260px;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 90%;     
        background-color: white; 
        padding: 0;
        box-shadow: 0 0 3px #999;
        border-radius: 5px;
    }
    .logo-container{
        position: absolute;
        top: 64px;
        width: 80%;
        left: 50%;
        transform: translateX(-50%);
        height: 15%;
        display: flex;
        justify-content: center;
        .logoimg-container{
            /* position: absolute; */
            width: 5em;
            height: 5em;
        }
        .systeminfo-container{
            margin: 18px 0 0 0;

            p{
                margin: 0;
                color: black;
            }
            .address{
                font-size: 24px;          
                font-weight: 1000;
            }
            .systemname{
                font-size: 17px;              
                font-weight: 700;
            }
        }
    }
} 
.mui-input-group {
    position: relative;
    border: 0;
}
.mui-input-group::before {
    display: none;
}
.mui-input-group::after {
    display: none;
}
.mui-input-group .mui-input-row {
    height: 40px;
    margin: 5px 0;
}
.mui-input-row label{
    width: 20%;
}
.mui-input-row input{
    float: left;
}
.login-bottom-img{
    position: fixed;
    bottom: 0px;
    width: 100%;
}
</style>