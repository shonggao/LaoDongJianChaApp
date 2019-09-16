<template>
    <div class="home-container">
        <header id="header" class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goBack()"><span class="back-btn">返回</span></a>
            <a class="mui-title">企业年检</a>
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
            <div class="info-container">
                <p>从业人员总数: {{ companyInfo.numberOfEnployees }}</p>
            </div>
            <div class="info-container">
                <p>兼职人员数: {{ companyInfo.numberOfParttimeWorkers }}</p>
            </div>
            <div class="info-container">
                <p>全日制用工人数: {{ companyInfo.numberOfFulltimemployment }}</p>
            </div>
            <div class="info-container">
                <p>非全日制用工人数: {{ companyInfo.numberOfParttimeLabor }}</p>
            </div>
            <div class="info-container">
                <p>少数民族人员数: {{ companyInfo.personnelNumberOfEthnicMinorities }}</p>
            </div>
            <div class="info-container">
                <p>童工人数: {{ companyInfo.numberOfChildlabor }}</p>
            </div>
            <div class="info-container">
                <p>聘用退休人数: {{ companyInfo.hiteRetiredPeople }}</p>
            </div>
            <div class="info-container">
                <p>聘用内退人数: {{ companyInfo.employmentNumberIsRetreatedInside }}</p>
            </div>
            <div class="info-container">
                <p>已办理录用备案就业人数: {{ companyInfo.numberOfEmploymentAlreadyDealtWith }}</p>
            </div>
            <div class="info-container">
                <p>残疾职工人数: {{ companyInfo.disabledWorkersNumber }}</p>
            </div>
            <div class="info-container">
                <p>外国籍从业人数: {{ companyInfo.foreignWorkers }}</p>
            </div>
            <div class="info-container">
                <p>解除劳动用工关系人数: {{ companyInfo.terminateThrLaborEmploymentRelationship }}</p>
            </div>
            <div class="info-container">
                <p>劳务派遣使用人数: {{ companyInfo.laborDispatchUsingNumbers }}</p>
            </div>
            <div class="info-container">
                <p>女职工人数: {{ companyInfo.numberOffemaleWorker }}</p>
            </div>
            <div class="info-container">
                <p>未成年工人数: {{ companyInfo.numberOfJuvenileWorkers }}</p>
            </div>
            <div class="info-container">
                <p>农民工个数: {{ companyInfo.numberOfMigrantWorkers }}</p>
            </div>
            <div class="info-container">
                <p>单位借用人员人数: {{ companyInfo.unitToBorrowStaffNumbers }}</p>
            </div>
            <div class="info-container">
                <p>实习见习人员/勤工助学人员: {{ companyInfo.internshipTraineePersonnel }}</p>
            </div>
            <div class="info-container">
                <p>和上年职工相比有无增减: {{ companyInfo.comparedToLastYearWorkerHas }}</p>
            </div>
            <div class="info-container">
                <p>增减原因: {{ companyInfo.increaseOrDecreaseTheReason }}</p>
            </div>
            <div class="info-container">
                <p>实际发放工资人数: {{ companyInfo.actualPayrollNumber }}</p>
            </div>
            <div class="info-container">
                <p>实际支付工资总额: {{ companyInfo.totalActualPaymentOFWages }}</p>
            </div>
            <div class="info-container">
                <p>个人最低月工资: {{ companyInfo.individualMinimumWage }}</p>
            </div>
            <div class="info-container">
                <p>是否提供工资清单: {{ companyInfo.ifWagesListProvided }}</p>
            </div>
            <div class="info-container">
                <p>是否拖欠、克扣工资: {{ companyInfo.whetherOrWithholdWagesInArrears }}</p>
            </div>
            <div class="info-container">
                <p>有无违反最低工资规定: {{ companyInfo.inViolantionOftheProvisionsOfTheMinimumWage }}</p>
            </div>
            <div class="info-container">
                <p>有无违反高温津贴: {{ companyInfo.anyViolationOfHighTemperatureAllowance }}</p>
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
            this.companyList = this.$store.state.inspectionList;
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