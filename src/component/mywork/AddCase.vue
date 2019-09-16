<template>
    <div class="home-container">
        <header id="header" class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goBack()"><span class="back-btn">返回</span></a>
            <a class="mui-title">新建案件</a>
            <mt-button type="primary" class="mui-pull-right" @click="addCase">添加</mt-button>
        </header>
        <div class="card-container">
            <mt-field label="案件来源：" placeholder="输入案件来源" v-model="caseTitle"></mt-field>
            <mt-field label="单位名称：" placeholder="输入单位名称" v-model="caseContent"></mt-field>
            <mt-field label="案件类型：" placeholder="输入案件类型" v-model="caseType"></mt-field>
            <mt-field label="劳社监案字：" placeholder="输入劳社监案字" v-model="caseNumber"></mt-field>
            <mt-field label="涉案单位地址：" placeholder="输入涉案单位地址" v-model="enterpriceAddress"></mt-field>
            <mt-field label="涉案单位邮政编码：" placeholder="输入涉案单位邮政编码" v-model="enterpriceNumber"></mt-field>
            <mt-field label="涉案法务负责人：" placeholder="输入涉案法务负责人" v-model="chargePeople"></mt-field>
            <mt-field label="经办人：" placeholder="输入经办人" v-model="lastPerson"></mt-field>
            <mt-field label="经办人意见：" placeholder="输入经办人意见" v-model="lastPersonAdvice"></mt-field>
            <mt-field label="涉案单位负责人电话：" placeholder="输入涉案单位负责人电话" v-model="chargePeoplePhone"></mt-field>
            <mt-field label="涉案人数：" placeholder="输入涉案人数" v-model="casePersonNumber"></mt-field>
            <mt-field label="涉案金额：" placeholder="输入涉案金额" v-model="caseMoney"></mt-field>            
            <mt-field label="承办人：" placeholder="输入承办人" v-model="underTaker"></mt-field>                 
        </div>
    </div>
</template>
<script>
import { Toast } from "mint-ui";

export default{
    data() {
        return {
            caseTitle: "",
            dateTime: "",
            caseContent: "",
            caseType: "",
            caseNumber: "",                
            lastPerson: "",
            underTaker: "",
            enterpriceAddress: "",
            enterpriceNumber: "",
            chargePeople: "",
            lastPersonAdvice: "",
            chargePeoplePhone: "",
            casePersonNumber: "",
            caseMoney: ""
        }
    },
    created() {
        this.$emit("pageChanged");
    },
    methods: {
        addCase(){
            if (this.caseTitle == ""){
                Toast("案件来源不能未空！！");
            }
            else{
                var caseInfo = {
                    caseTitle: this.caseTitle,
                    dateTime: new Date(),
                    caseContent: this.caseContent,
                    caseType: this.caseType,
                    caseNumber: this.caseNumber,                
                    lastPerson: this.lastPerson,
                    underTaker: this.underTaker,
                    enterpriceAddress: this.enterpriceAddress,
                    enterpriceNumber: this.enterpriceNumber,
                    chargePeople: this.chargePeople,
                    lastPersonAdvice: this.lastPersonAdvice,
                    chargePeoplePhone: this.chargePeoplePhone,
                    casePersonNumber: this.casePersonNumber,
                    caseMoney: this.caseMoney
                    };
                this.$store.commit("addCase", caseInfo);
                this.caseTitle= "";
                this.dateTime= "";
                this.caseContent= "";
                this.caseType= "";
                this.caseNumber= "";
                this.lastPerson= "";
                this.underTaker= "";
                this.enterpriceAddress= "";
                this.enterpriceNumber= "";
                this.chargePeople= "";
                this.lastPersonAdvice= "";
                this.chargePeoplePhone= "";
                this.casePersonNumber= "";
                this.caseMoney = ""
            }
          
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
        .mui-pull-right{
            font-size: inherit;
            color: #fff;
            background-color: inherit;
            font-weight: bold;
            line-height: 52px;
        }
    }
    .card-container{
        position: absolute;

        width: 100%;
        /deep/ .mint-field-core{
            margin: 0 !important;
        }
    }
}    
</style>