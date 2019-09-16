<template>
    <div class="home-container">
        <header id="header" class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goBack()"><span class="back-btn">返回</span></a>
            <a class="mui-title">企业基本信息</a>
            <mt-button type="primary" class="mui-pull-right" @click="addInspectionCompany">添加</mt-button>
        </header>
        <div class="card-container">
            <mt-field label="单位名称：" placeholder="输入单位名称" v-model="pd.enterpriseName"></mt-field>
            <mt-field label="统一社会信用代码：" placeholder="输入统一社会信用代码" v-model="pd.socialCreditCode"></mt-field>
            <mt-field label="单位地址：" placeholder="输入单位地址" v-model="pd.enterpriseAddress"></mt-field>
            <mt-field label="组织机构代码：" placeholder="输入组织机构代码" v-model="pd.organizationCode"></mt-field>
            <mt-field label="经营方式：" placeholder="输入经营方式" v-model="pd.managementStyle"></mt-field>
            <mt-field label="电子邮箱：" placeholder="输入电子邮箱" v-model="pd.email"></mt-field>
            <mt-field label="单位网址：" placeholder="输入单位网址" v-model="pd.website"></mt-field>
            <mt-field label="产业类别：" placeholder="输入产业类别" v-model="pd.industrialCategory"></mt-field>
            <mt-field label="传真：" placeholder="输入传真" v-model="pd.fax"></mt-field>
            <mt-field label="单位成立日期：" placeholder="输入单位成立日期" v-model="pd.establishDate"></mt-field>
            <mt-field label="单位简称：" placeholder="输入单位简称" v-model="pd.simpleName"></mt-field>
            <mt-field label="单位类型：" placeholder="输入单位类型" v-model="pd.enterpriseType"></mt-field>
            <mt-field label="经济类型：" placeholder="输入经济类型" v-model="pd.economicType"></mt-field>
            <mt-field label="行业类型：" placeholder="输入行业类型" v-model="pd.industryType"></mt-field>
            <mt-field label="（注册资金）币种：" placeholder="输入（注册资金）币种" v-model="pd.moneyType"></mt-field>
            <mt-field label="注册资金（万元）：" placeholder="输入注册资金（万元）" v-model="pd.regisMoney"></mt-field>
            <mt-field label="隶属监管关系：" placeholder="输入隶属监管关系" v-model="pd.subordinateRelation"></mt-field>
            <mt-field label="主管部门/主要投资人/控股单位：" placeholder="输入主管部门/主要投资人/控股单位" v-model="pd.majorCharge"></mt-field>
            <mt-field label="主营范围：" placeholder="输入主营范围" v-model="pd.mainBusiness"></mt-field>
            <mt-field label="兼营范围：" placeholder="输入兼营范围" v-model="pd.partBusiness"></mt-field>
            <mt-field label="工商营业执照号码：" placeholder="输入工商营业执照号码" v-model="pd.businessNumber"></mt-field>
            <mt-field label="法定代表人：" placeholder="输入法定代表人" v-model="pd.legalRepresentative"></mt-field>
            <mt-field label="法定代表人联系电话：" placeholder="输入法定代表人联系电话" v-model="pd.repreTelephone"></mt-field>
            <mt-field label="法定代表人公民身份证号码：" placeholder="输入法定代表人公民身份证号码" v-model="pd.repreID"></mt-field>
            <mt-field label="单位负责人姓名：" placeholder="输入单位负责人姓名" v-model="pd.enterpriseChargeName"></mt-field>
            <mt-field label="单位负责人电话：" placeholder="输入单位负责人电话" v-model="pd.enterpriseChargeTelephone"></mt-field>
            <mt-field label="劳资负责人姓名：" placeholder="输入劳资负责人姓名" v-model="pd.moneyChargeName"></mt-field>
            <mt-field label="劳资负责人联系电话：" placeholder="输入劳资负责人联系电话" v-model="pd.moneyChargeTelephone"></mt-field>
            <mt-field label="联系人：" placeholder="输入联系人" v-model="pd.linkPerson"></mt-field>
            <mt-field label="联系人电话：" placeholder="输入联系人电话" v-model="pd.linkPersonTelephone"></mt-field>
            <mt-field label="工商登记发照日期：" placeholder="输入工商登记发照日期" v-model="pd.handoutDate"></mt-field>
            <mt-field label="工商登记有效期限：" placeholder="输入工商登记有效期限" v-model="pd.effectiveDate"></mt-field>
            <mt-field label="单位开户行：" placeholder="输入单位开户行" v-model="pd.enterpriseAccountOpenBank"></mt-field>
            <mt-field label="开户行：" placeholder="输入开户行" v-model="pd.accountOpenBank"></mt-field>            
            <mt-field label="银行账户：" placeholder="输入银行账户" v-model="pd.bankAccount"></mt-field> 
            <mt-field label="开户日期：" placeholder="输入开户日期：" type="date" v-model="datetime"></mt-field>                
            <!-- <mt-datetime-picker
                ref="picker"
                type="datetime"
                v-model="date"
            > 
            </mt-datetime-picker>-->
        </div>
    </div>
</template>
<script>
import { Toast, DatetimePicker } from "mint-ui";


export default{
    data() {
        return {
            pd: {},
            datetime: "",
            // pickerValue: "",
        }
    },
    component:{

    },
    created() {
        this.$emit("pageChanged");
    },
    methods: {
        addInspectionCompany(){
            if (this.enterpriseName == ""){
                Toast("单位名称不能未空！！");
            }
            else{
                var inspectionCompany = {
                    ENTERPRISE_ID: "",
                    ENTERPRISENAME: this.pd.enterpriseName,
                    SOCIALCREDITCODE: this.pd.socialCreditCode,
                    ENTERPRISEADDRESS: this.pd.enterpriseAddress,
                    ORGANIZATIONCODE: this.pd.organizationCode,
                    MANAGEMENTSTYLE: this.pd.managementStyle,
                    EMAIL: this.pd.email,
                    WEBSITE: this.pd.website,
                    INDUSTRIALCATEGORY: this.pd.industrialCategory,
                    FAX: this.pd.fax,
                    ESTABLISHDATE: this.pd.establishDate,
                    SIMPLENAME: this.pd.simpleName,
                    ENTERPRISETYPE: this.pd.enterpriseType,
                    ECONOMICTYPE: this.pd.economicType,
                    INDUSTRYTYPE: this.pd.industryType,
                    MONEYTYPE: this.pd.moneyType,
                    REGISMONEY: this.pd.regisMoney,
                    SUBORDINATERELATION: this.pd.subordinateRelation,
                    MAJORCHARGE: this.pd.majorCharge,
                    MAINBUSINESS: this.pd.mainBusiness,
                    PARTBUSINESS: this.pd.partBusiness,
                    BUSINESSNUMBER: this.pd.businessNumber,
                    LEGALREPRESENTATIVE: this.pd.legalRepresentative,
                    REPRETELEPHONE: this.pd.repreTelephone,
                    REPREID: this.pd.repreID,
                    ENTERPRISECHARGENAME: this.pd.enterpriseChargeName,
                    ENTERPRISECHARGETELEPHONE: this.pd.enterpriseChargeTelephone,
                    MONEYCHARGENAME: this.pd.moneyChargeName,
                    MONEYCHARGETELEPHONE: this.pd.moneyChargeTelephone,
                    LINKPERSON: this.pd.linkPerson,
                    LINKPERSONTELEPHONE: this.pd.linkPersonTelephone,
                    HANDOUTDATE: this.pd.handoutDate,
                    EFFECTIVEDATE: this.pd.effectiveDate,
                    ENTERPRISEACCOUNTOPENBANK: this.pd.enterpriseAccountOpenBank,
                    ACCOUNTOPENBANK: this.pd.ccountOpenBank,
                    BANKACCOUNT: this.pd.bankAccount,
                    tm: new Date().getTime(),
                    };
                // this.$store.commit("addInspectionCompany", inspectionCompany);

                // 增加企业信息
                this.$http.post('enterprise/add',inspectionCompany, {withCredentials: true}).then(result => {
                    console.log(result);
                }, error => {
                console.log(error);
            });
            }
                this.pd = {};
        },
        goBack(){
			//点击后退
			this.$router.go(-1);
		},
        // openPicker() {
        //     this.$refs.picker.open();
        //     console.log(1);
        // },
        // handleConfirm (data) {
        //     this.date = getDate(data);   //获取的时间为时间戳，getdata是自己写的一个转换时间的方法
        // },
    }
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