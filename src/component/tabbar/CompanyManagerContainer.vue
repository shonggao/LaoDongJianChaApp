<template>
    <div class="home-container">
        <header id="header" class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goBack()"><span class="back-btn">返回</span></a>
            <a class="mui-title">企业管理</a>
        </header>
        <div class="button-container">
            <mt-button class="company-button" @click="goCompanyInfo">企业基本信息</mt-button>
            <mt-button class="company-button" @click="goCompanyAnnualSurvey">企业年检</mt-button>
            <mt-button class="company-button" @click="goCompanyEvaluate">企业信用评级</mt-button>
        </div>            
    </div>
</template>
<script>
export default{
    data() {
        return {
            name: "企业管理"
        }
    },
    created() {
        this.$emit("pageChanged",true);
    },
    methods: {
        goCompanyInfo(){
            this.$router.push("/companymanager/companyinfolsit");
        },
        goCompanyAnnualSurvey(){
            this.$router.push("/companymanager/inspectioncompanylist");
        },
        goCompanyEvaluate(){
            this.$router.push("/companymanager/companyinfolsit");
        },
        goBack(){
			//点击后退
			this.$router.go(-1);
		}
    },
}
</script>
<style lang="scss" scoped>
.home-container{
    .mui-bar.mui-bar-nav{
        font-size: 19px;
        z-index: 80;
        height: 50px;
        background-color: #26a2ff;
        .mui-action-back.mui-icon.mui-icon-left-nav.mui-pull-left{
            color: #fff;
            padding-top: 14px;
            .back-btn{
                font-size: 19px;
                font-weight: bold;
            }
        }
        .mui-title{
            height: 50px;
            background-color: #26a2ff;
            display: flex;
            justify-content: center;
            overflow: hidden;
            font-weight: bold;
            line-height: 52px;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #fff;
            font-size: inherit;
        }
    }
    .button-container{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 70%;
        height: 100%;
        .company-button{
            margin: 10px 0;
            width: 100%;
            height: 16%;
            font-size: 20px;
            background: linear-gradient(to bottom right, rgba(255,140,0,0.4), DarkOrange);
            color: white;
            box-shadow: 0 0 7px #888;
        }
    }
}
</style>