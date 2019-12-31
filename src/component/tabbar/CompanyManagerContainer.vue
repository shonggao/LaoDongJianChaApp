<template>
    <div class="home-container">
        <header id="header" class="mui-bar mui-bar-nav">
            <!-- <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click.prevent="goBack"><span class="back-btn">返回</span></a> -->
            <a class="mui-title">企业管理</a>
        </header>
        <div class="cell-container">
            <!-- <mt-cell title="企业基本信息" is-link to="/companymanager/companyinfolist">
                <img slot="icon" src="../../image/企业基本信息.png" width="34" height="34">
            </mt-cell> -->
            <mt-cell title="企业年检" is-link to="/companymanager/inspectioncompanylist">
                <img slot="icon" src="../../image/企业年检.png" width="34" height="34">
            </mt-cell>
            <!-- <mt-cell title="企业信用评级" @click.native="infoShow()" is-link>
                <img slot="icon" src="../../image/企业信用评级.png" width="34" height="34">
            </mt-cell> -->
            <!-- <mt-button class="company-button" @click="goCompanyInfo">企业基本信息</mt-button>
            <mt-button class="company-button" @click="goCompanyAnnualSurvey">企业年检</mt-button>
            <mt-button class="company-button" @click="goCompanyEvaluate">企业信用评级</mt-button> -->
        </div>            
    </div>
</template>
<script>
import { Toast } from "mint-ui";

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
            this.$router.push("/companymanager/companyinfolist");
        },
        goCompanyAnnualSurvey(){
            this.$router.push("/companymanager/inspectioncompanylist");
        },
        goCompanyEvaluate(){
            this.$router.push("/companymanager/companyinfolist");
        },
        goBack(){
			//点击后退
            // this.$router.go(-1);
            this.$router.push("/home");
        },
        infoShow(){
            console.log('info_show');
            let instance = Toast('本功能正在开发中');
            setTimeout(() => {
                instance.close();
            }, 2000);
        }    
    },
}
</script>
<style lang="scss" scoped>
.home-container{
    .mui-bar.mui-bar-nav{
        font-size: 19px;
        z-index: 80;
        height: 75px;
        /* background-color: #26a2ff; */
        .mui-action-back.mui-icon.mui-icon-left-nav.mui-pull-left{
            color: black;
            padding-top: 39px;
            .back-btn{
                font-size: 19px;
                font-weight: bold;
            }
        }
        .mui-title{
            height: 50px;
            background-color: inherit;
            display: flex;
            justify-content: center;
            overflow: hidden;
            font-weight: bold;
            line-height: 52px;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: black;
            font-size: inherit;
        }
        .mui-pull-right{
            font-size: inherit;
            color: black;
            margin-top: 25px;
            background-color: inherit;
            font-weight: bold;
            line-height: 52px;
        }
    }
    .cell-container{
        /* display: flex; */
        /* flex-direction: column; */
        /* justify-content: space-evenly; */
        width: 100%;
        height: 100%;
        img{

        }
        .mint-cell{
            height: 80px;
            margin: 15px;
            border-radius: 10px;
        }
        /deep/.mint-cell-wrapper{
            height: inherit;
        }
        /deep/.mint-cell-text{
            margin-left: 10px;
            font-size: 17px;
        }
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