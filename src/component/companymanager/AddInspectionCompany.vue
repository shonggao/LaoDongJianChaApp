<template>
    <div class="home-container">
        <!-- <mt-header fixed title="企业管理" class="header-container">
            <span slot="left" @click="goBack()">
                <mt-button icon="back">返回</mt-button>
            </span>
            <mt-button type="primary" size="small" slot="right" @click="addCompanyInfo">添加</mt-button>
        </mt-header> -->
        <header id="header" class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goBack()"><span class="back-btn">返回</span></a>
            <a class="mui-title">企业管理</a>
            <mt-button type="primary" class="mui-pull-right" @click="addCompanyInfo">添加</mt-button>
        </header>
        <div class="card-container">
            <mt-field label="单位名称：" placeholder="输入单位名称" v-model="enterpriseName"></mt-field>
            <mt-field label="统一社会信用代码：" placeholder="输入统一社会信用代码" v-model="socialCreditCode"></mt-field>
            <mt-field label="单位地址：" placeholder="输入单位地址" v-model="enterpriseAddress"></mt-field>
            <mt-field label="组织机构代码：" placeholder="输入组织机构代码" v-model="organizationCode"></mt-field>
            <mt-field label="经营方式：" placeholder="输入经营方式" v-model="managementStyle"></mt-field>
            <mt-field label="电子邮箱：" placeholder="输入电子邮箱" v-model="email"></mt-field>
            <mt-field label="单位网址：" placeholder="输入单位网址" v-model="website"></mt-field>
            <mt-field label="产业类别：" placeholder="输入产业类别" v-model="industrialCategory"></mt-field>
            <mt-field label="传真：" placeholder="输入传真" v-model="fax"></mt-field>
            <mt-field label="单位成立日期：" placeholder="输入单位成立日期" v-model="establishDate"></mt-field>
            <mt-field label="单位简称：" placeholder="输入单位简称" v-model="simpleName"></mt-field>
            <mt-field label="单位类型：" placeholder="输入单位类型" v-model="enterpriseType"></mt-field>
            <mt-field label="经济类型：" placeholder="输入经济类型" v-model="economicType"></mt-field>
            <mt-field label="行业类型：" placeholder="输入行业类型" v-model="industryType"></mt-field>
            <mt-field label="（注册资金）币种：" placeholder="输入（注册资金）币种" v-model="moneyType"></mt-field>
            <mt-field label="注册资金（万元）：" placeholder="输入注册资金（万元）" v-model="regisMoney"></mt-field>
            <mt-field label="隶属监管关系：" placeholder="输入隶属监管关系" v-model="subordinateRelation"></mt-field>
            <mt-field label="主管部门/主要投资人/控股单位：" placeholder="输入主管部门/主要投资人/控股单位" v-model="majorCharge"></mt-field>
            <mt-field label="主营范围：" placeholder="输入主营范围" v-model="mainBusiness"></mt-field>
            <mt-field label="兼营范围：" placeholder="输入兼营范围" v-model="partBusiness"></mt-field>
            <mt-field label="工商营业执照号码：" placeholder="输入工商营业执照号码" v-model="businessNumber"></mt-field>
            <mt-field label="法定代表人：" placeholder="输入法定代表人" v-model="legalRepresentative"></mt-field>
            <mt-field label="法定代表人联系电话：" placeholder="输入法定代表人联系电话" v-model="repreTelephone"></mt-field>
            <mt-field label="法定代表人公民身份证号码：" placeholder="输入法定代表人公民身份证号码" v-model="repreID"></mt-field>
            <mt-field label="单位负责人姓名：" placeholder="输入单位负责人姓名" v-model="enterpriseChargeName"></mt-field>
            <mt-field label="单位负责人电话：" placeholder="输入单位负责人电话" v-model="enterpriseChargeTelephone"></mt-field>
            <mt-field label="劳资负责人姓名：" placeholder="输入劳资负责人姓名" v-model="moneyChargeName"></mt-field>
            <mt-field label="劳资负责人联系电话：" placeholder="输入劳资负责人联系电话" v-model="moneyChargeTelephone"></mt-field>
            <mt-field label="联系人：" placeholder="输入联系人" v-model="linkPerson"></mt-field>
            <mt-field label="联系人电话：" placeholder="输入联系人电话" v-model="linkPersonTelephone"></mt-field>
            <mt-field label="工商登记发照日期：" placeholder="输入工商登记发照日期" v-model="handoutDate"></mt-field>
            <mt-field label="工商登记有效期限：" placeholder="输入工商登记有效期限" v-model="effectiveDate"></mt-field>
            <mt-field label="单位开户行：" placeholder="输入单位开户行" v-model="enterpriseAccountOpenBank"></mt-field>
            <mt-field label="开户行：" placeholder="输入开户行" v-model="accountOpenBank"></mt-field>
            <mt-field label="银行账户：" placeholder="输入银行账户" v-model="bankAccount"></mt-field> 
            
            <mt-field label="从业人员总数：" placeholder="输入从业人员总数" v-model="numberOfEnployees"></mt-field>            
            <mt-field label="兼职人员数：" placeholder="输入兼职人员数" v-model="numberOfParttimeWorkers"></mt-field>            
            <mt-field label="全日制用工人数：" placeholder="输入全日制用工人数" v-model="numberOfFulltimemployment"></mt-field>            
            <mt-field label="非全日制用工人数：" placeholder="输入非全日制用工人数" v-model="numberOfParttimeLabor"></mt-field>            
            <mt-field label="少数民族人员数：" placeholder="输入少数民族人员数" v-model="personnelNumberOfEthnicMinorities"></mt-field>            
            <mt-field label="童工人数：" placeholder="输入童工人数" v-model="numberOfChildlabor"></mt-field>            
            <mt-field label="聘用退休人数：" placeholder="输入聘用退休人数" v-model="hiteRetiredPeople"></mt-field>            
            <mt-field label="聘用内退人数：" placeholder="输入聘用内退人数" v-model="employmentNumberIsRetreatedInside"></mt-field>            
            <mt-field label="已办理录用备案就业人数：" placeholder="输入已办理录用备案就业人数" v-model="numberOfEmploymentAlreadyDealtWith"></mt-field>            
            <mt-field label="残疾职工人数：" placeholder="输入残疾职工人数" v-model="disabledWorkersNumber"></mt-field>            
            <mt-field label="外国籍从业人数：" placeholder="输入外国籍从业人数" v-model="foreignWorkers"></mt-field>            
            <mt-field label="解除劳动用工关系人数：" placeholder="输入解除劳动用工关系人数" v-model="terminateThrLaborEmploymentRelationship"></mt-field>            
            <mt-field label="劳务派遣使用人数：" placeholder="输入劳务派遣使用人数" v-model="laborDispatchUsingNumbers"></mt-field>            
            <mt-field label="女职工人数：" placeholder="输入女职工人数" v-model="numberOffemaleWorker"></mt-field>            
            <mt-field label="未成年工人数：" placeholder="输入未成年工人数" v-model="numberOfJuvenileWorkers"></mt-field>            
            <mt-field label="农民工个数：" placeholder="输入农民工个数" v-model="numberOfMigrantWorkers"></mt-field>            
            <mt-field label="单位借用人员人数：" placeholder="输入单位借用人员人数" v-model="unitToBorrowStaffNumbers"></mt-field>            
            <mt-field label="实习见习人员/勤工助学人员：" placeholder="输入实习见习人员/勤工助学人员" v-model="internshipTraineePersonnel"></mt-field>            
            <mt-field label="和上年职工相比有无增减：" placeholder="输入和上年职工相比有无增减" v-model="comparedToLastYearWorkerHas"></mt-field>            
            <mt-field label="增减原因：" placeholder="输入增减原因" v-model="increaseOrDecreaseTheReason"></mt-field>            
            <mt-field label="实际发放工资人数：" placeholder="输入实际发放工资人数" v-model="actualPayrollNumber"></mt-field>            
            <mt-field label="实际支付工资总额：" placeholder="输入实际支付工资总额" v-model="totalActualPaymentOFWages"></mt-field>            
            <mt-field label="个人最低月工资：" placeholder="输入个人最低月工资" v-model="individualMinimumWage"></mt-field>            
            <mt-field label="是否提供工资清单：" placeholder="输入是否提供工资清单" v-model="ifWagesListProvided"></mt-field>            
            <mt-field label="是否拖欠、克扣工资：" placeholder="输入是否拖欠、克扣工资" v-model="whetherOrWithholdWagesInArrears"></mt-field>            
            <mt-field label="有无违反最低工资规定：" placeholder="输入有无违反最低工资规定" v-model="inViolantionOftheProvisionsOfTheMinimumWage"></mt-field>            
            <mt-field label="有无违反高温津贴：" placeholder="输入有无违反高温津贴" v-model="anyViolationOfHighTemperatureAllowance"></mt-field>            
            
        </div>
    </div>
</template>
<script>
import { Toast } from "mint-ui";

export default{
    data() {
        return {
            enterpriseName: "",
            socialCreditCode: "",
            enterpriseAddress: "",
            organizationCode: "",
            managementStyle: "",
            email: "",
            website: "",
            industrialCategory: "",
            fax: "",
            establishDate: "",
            simpleName: "",
            enterpriseType: "",
            economicType: "",
            industryType: "",
            moneyType: "",
            regisMoney: "",
            subordinateRelation: "",
            majorCharge: "",
            mainBusiness: "",
            partBusiness: "",
            businessNumber: "",
            legalRepresentative: "",
            repreTelephone: "",
            repreID: "",
            enterpriseChargeName: "",
            enterpriseChargeTelephone: "",
            moneyChargeName: "",
            moneyChargeTelephone: "",
            linkPerson: "",
            linkPersonTelephone: "",
            handoutDate: "",
            effectiveDate: "",
            enterpriseAccountOpenBank: "",
            accountOpenBank: "",
            bankAccount: "",
            "numberOfEnployees": "",
            "numberOfParttimeWorkers": "",
            "numberOfFulltimemployment": "",
            "numberOfParttimeLabor": "",
            "personnelNumberOfEthnicMinorities": "",
            "numberOfChildlabor": "",
            "hiteRetiredPeople": "",
            "employmentNumberIsRetreatedInside": "",
            "numberOfEmploymentAlreadyDealtWith": "",
            "disabledWorkersNumber": "",
            "foreignWorkers": "",
            "terminateThrLaborEmploymentRelationship": "",
            "laborDispatchUsingNumbers": "",
            "numberOffemaleWorker": "",
            "numberOfJuvenileWorkers": "",
            "numberOfMigrantWorkers": "",
            "unitToBorrowStaffNumbers": "",
            "internshipTraineePersonnel": "",
            "comparedToLastYearWorkerHas": "",
            "increaseOrDecreaseTheReason": "",
            "actualPayrollNumber": "",
            "totalActualPaymentOFWages": "",
            "individualMinimumWage": "",
            "ifWagesListProvided": "",
            "whetherOrWithholdWagesInArrears": "",
            "inViolantionOftheProvisionsOfTheMinimumWage": "",
            "anyViolationOfHighTemperatureAllowance": "",

            name: "企业管理"
        }
    },
    created() {
        this.$emit("pageChanged");
    },
    methods: {
        addCompanyInfo(){
            if (this.enterpriseName == ""){
                Toast("单位名称不能未空！！");
            }
            else{
                var companyInfo = {
                    enterpriseID: (this.$store.state.companyInfoList[this.$store.state.companyInfoList.length-1]).enterpriseID+1,
                    enterpriseName: this.enterpriseName,
                    socialCreditCode: this.socialCreditCode,
                    enterpriseAddress: this.enterpriseAddress,
                    organizationCode: this.organizationCode,
                    managementStyle: this.managementStyle,
                    email: this.email,
                    website: this.website,
                    industrialCategory: this.industrialCategory,
                    fax: this.fax,
                    establishDate: this.establishDate,
                    simpleName: this.simpleName,
                    enterpriseType: this.enterpriseType,
                    economicType: this.economicType,
                    industryType: this.industryType,
                    moneyType: this.moneyType,
                    regisMoney: this.regisMoney,
                    subordinateRelation: this.subordinateRelation,
                    majorCharge: this.majorCharge,
                    mainBusiness: this.mainBusiness,
                    partBusiness: this.partBusiness,
                    businessNumber: this.businessNumber,
                    legalRepresentative: this.legalRepresentative,
                    repreTelephone: this.repreTelephone,
                    repreID: this.repreID,
                    enterpriseChargeName: this.enterpriseChargeName,
                    enterpriseChargeTelephone: this.enterpriseChargeTelephone,
                    moneyChargeName: this.moneyChargeName,
                    moneyChargeTelephone: this.moneyChargeTelephone,
                    linkPerson: this.linkPerson,
                    linkPersonTelephone: this.linkPersonTelephone,
                    handoutDate: this.handoutDate,
                    effectiveDate: this.effectiveDate,
                    enterpriseAccountOpenBank: this.enterpriseAccountOpenBank,
                    accountOpenBank: this.accountOpenBank,
                    bankAccount: this.bankAccount,
                    "numberOfEnployees": this.numberOfEnployees,
                    "numberOfParttimeWorkers": this.numberOfParttimeWorkers,
                    "numberOfFulltimemployment": this.numberOfFulltimemployment,
                    "numberOfParttimeLabor": this.numberOfParttimeLabor,
                    "personnelNumberOfEthnicMinorities": this.personnelNumberOfEthnicMinorities,
                    "numberOfChildlabor": this.numberOfChildlabor,
                    "hiteRetiredPeople": this.hiteRetiredPeople,
                    "employmentNumberIsRetreatedInside": this.employmentNumberIsRetreatedInside,
                    "numberOfEmploymentAlreadyDealtWith": this.numberOfEmploymentAlreadyDealtWith,
                    "disabledWorkersNumber": this.disabledWorkersNumber,
                    "foreignWorkers": this.foreignWorkers,
                    "terminateThrLaborEmploymentRelationship": this.terminateThrLaborEmploymentRelationship,
                    "laborDispatchUsingNumbers": this.laborDispatchUsingNumbers,
                    "numberOffemaleWorker": this.numberOffemaleWorker,
                    "numberOfJuvenileWorkers": this.numberOfJuvenileWorkers,
                    "numberOfMigrantWorkers": this.numberOfMigrantWorkers,
                    "unitToBorrowStaffNumbers": this.unitToBorrowStaffNumbers,
                    "internshipTraineePersonnel": this.internshipTraineePersonnel,
                    "comparedToLastYearWorkerHas": this.comparedToLastYearWorkerHas,
                    "increaseOrDecreaseTheReason": this.increaseOrDecreaseTheReason,
                    "actualPayrollNumber": this.actualPayrollNumber,
                    "totalActualPaymentOFWages": this.totalActualPaymentOFWages,
                    "individualMinimumWage": this.individualMinimumWage,
                    "ifWagesListProvided": this.ifWagesListProvided,
                    "whetherOrWithholdWagesInArrears": this.whetherOrWithholdWagesInArrears,
                    "inViolantionOftheProvisionsOfTheMinimumWage": this.inViolantionOftheProvisionsOfTheMinimumWage,
                    "anyViolationOfHighTemperatureAllowance": this.anyViolationOfHighTemperatureAllowance
                    };
                this.$store.commit("addCompanyInfo",companyInfo);
                this.enterpriseName= "";
                this.socialCreditCode= "";
                this.enterpriseAddress= "";
                this.organizationCode= "";
                this.managementStyle= "";
                this.email= "";
                this.website= "";
                this.industrialCategory= "";
                this.fax= "";
                this.establishDate= "";
                this.simpleName= "";
                this.enterpriseType= "";
                this.economicType= "";
                this.industryType= "";
                this.moneyType= "";
                this.regisMoney= "";
                this.subordinateRelation= "";
                this.majorCharge= "";
                this.mainBusiness= "";
                this.partBusiness= "";
                this.businessNumber= "";
                this.legalRepresentative= "";
                this.repreTelephone= "";
                this.repreID= "";
                this.enterpriseChargeName= "";
                this.enterpriseChargeTelephone= "";
                this.moneyChargeName= "";
                this.moneyChargeTelephone= "";
                this.linkPerson= "";
                this.linkPersonTelephone= "";
                this.handoutDate= "";
                this.effectiveDate= "";
                this.enterpriseAccountOpenBank= "";
                this.accountOpenBank= "";
                this.bankAccount= "";
                this.numberOfEnployees= "",
                this.numberOfParttimeWorkers= "",
                this.numberOfFulltimemployment= "",
                this.numberOfParttimeLabor= "",
                this.personnelNumberOfEthnicMinorities= "",
                this.numberOfChildlabor= "",
                this.hiteRetiredPeople= "",
                this.employmentNumberIsRetreatedInside= "",
                this.numberOfEmploymentAlreadyDealtWith= "",
                this.disabledWorkersNumber= "",
                this.foreignWorkers= "",
                this.terminateThrLaborEmploymentRelationship= "",
                this.laborDispatchUsingNumbers= "",
                this.numberOffemaleWorker= "",
                this.numberOfJuvenileWorkers= "",
                this.numberOfMigrantWorkers= "",
                this.unitToBorrowStaffNumbers= "",
                this.internshipTraineePersonnel= "",
                this.comparedToLastYearWorkerHas= "",
                this.increaseOrDecreaseTheReason= "",
                this.actualPayrollNumber= "",
                this.totalActualPaymentOFWages= "",
                this.individualMinimumWage= "",
                this.ifWagesListProvided= "",
                this.whetherOrWithholdWagesInArrears= "",
                this.inViolantionOftheProvisionsOfTheMinimumWage= "",
                this.anyViolationOfHighTemperatureAllowance= ""
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
        /* height: 100%; */
        /* padding-bottom: 14%; */
        width: 100%;
        /deep/ .mint-field-core{
            margin: 0 !important;
        }
    }
}    
</style>