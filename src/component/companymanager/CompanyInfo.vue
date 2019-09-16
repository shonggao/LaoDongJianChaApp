<template>
    <div class="home-container">
        <header id="header" class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goBack()"><span class="back-btn">返回</span></a>
            <a class="mui-title">企业管理</a>
        </header>
        <div class="card-container">
            <div class="info-container">
                <p>单位名称：{{ companyInfo.enterpriseName }}</p>
            </div>
            <div class="info-container">
               <p>统一社会信用代码：{{ companyInfo.socialCreditCode }}</p>
            </div>
            <div class="info-container">
                <p>单位地址：{{ companyInfo.enterpriseAddress }}</p>
            </div>
            <div class="info-container">
                <p>组织机构代码：{{ companyInfo.organizationCode }}</p>
            </div>
            <div class="info-container">
                <p>经营方式：{{ companyInfo.managementStyle }}</p>
            </div>
            <div class="info-container">
                <p>电子邮箱：{{ companyInfo.email }}</p>
            </div>
            <div class="info-container">
                <p>单位网址：{{ companyInfo.website }}</p>
            </div>
            <div class="info-container">
                <p>产业类别：{{ companyInfo.industrialCategory }}</p>
            </div>
            <div class="info-container">
                <p>传真： {{ companyInfo.fax }}</p>
            </div>
            <div class="info-container">
                <p>单位成立日期： {{ companyInfo.establishDate }}</p>
            </div>
            <div class="info-container">
                <p>单位简称： {{ companyInfo.simpleName }}</p>
            </div>
            <div class="info-container">
                <p>单位类型： {{ companyInfo.enterpriseType }}</p>
            </div>
            <div class="info-container">
                <p>经济类型: {{ companyInfo.economicType }}</p>
            </div>
            <div class="info-container">
                <p>行业类型: {{ companyInfo.industryType }}</p>
            </div>
            <div class="info-container">
                <p>（注册资金）币种: {{ companyInfo.moneyType }}</p>
            </div>
            <div class="info-container">
                <p>注册资金（万元）: {{ companyInfo.regisMoney }}</p>
            </div>
            <div class="info-container">
                <p>隶属监管关系: {{ companyInfo.subordinateRelation }}</p>
            </div>
            <div class="info-container">
                <p>主管部门/主要投资人/控股单位: {{ companyInfo.majorCharge }}</p>
            </div>
            <div class="info-container">
                <p>主营范围: {{ companyInfo.mainBusiness }}</p>
            </div>
            <div class="info-container">
                <p>兼营范围: {{ companyInfo.partBusiness }}</p>
            </div>
            <div class="info-container">
                <p>工商营业执照号码: {{ companyInfo.businessNumber }}</p>
            </div>
            <div class="info-container">
                <p>法定代表人: {{ companyInfo.legalRepresentative }}</p>
            </div>
            <div class="info-container">
                <p>法定代表人联系电话: {{ companyInfo.repreTelephone }}</p>
            </div>
            <div class="info-container">
                <p>法定代表人公民身份证号码: {{ companyInfo.repreID }}</p>
            </div>
            <div class="info-container">
                <p>单位负责人姓名: {{ companyInfo.enterpriseChargeName }}</p>
            </div>
            <div class="info-container">
                <p>单位负责人电话: {{ companyInfo.enterpriseChargeTelephone }}</p>
            </div>
            <div class="info-container">
                <p>劳资负责人姓名: {{ companyInfo.moneyChargeName }}</p>
            </div>
            <div class="info-container">
                <p>劳资负责人联系电话: {{ companyInfo.moneyChargeTelephone }}</p>
            </div>
            <div class="info-container">
                <p>联系人: {{ companyInfo.linkPerson }}</p>
            </div>
            <div class="info-container">
                <p>联系人电话: {{ companyInfo.linkPersonTelephone }}</p>
            </div>
            <div class="info-container">
                <p>工商登记发照日期: {{ companyInfo.handoutDate }}</p>
            </div>
            <div class="info-container">
                <p>工商登记有效期限: {{ companyInfo.effectiveDate }}</p>
            </div>
            <div class="info-container">
                <p>单位开户行: {{ companyInfo.enterpriseAccountOpenBank }}</p>
            </div>
            <div class="info-container">
                <p>开户行: {{ companyInfo.accountOpenBank }}</p>
            </div>
            <div class="info-container">
                <p>银行账户: {{ companyInfo.bankAccount }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data() {
        return {
            id: this.$route.params.id,  //企业ID
            companyList: [
            ],  //企业基本信息
            companyInfo: {},
            name: "企业管理" 
        }
    },
    created() {
        this.getCompanyInfo();
        this.$emit("pageChanged");
    },
    methods: {
        getCompanyInfo(){
            this.companyList = this.$store.state.companyInfoList;
            this.companyInfo = this.companyList[this.id];
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
    .card-container{
        display: flex;
        flex-direction: column;
        position: absolute;
        /* height: 100%; */
        /* padding-bottom: 14%; */
        width: 100%;
        .info-container{ 
            padding: 8px 4px;
            background-color: white;
            border-bottom: thin solid #5e5e5e;
            border-bottom-width: 1px;
            vertical-align: middle;
            font-size: 15px;
            color: black;
            p{
                margin: 0;
            }
        }
    }
}    
</style>