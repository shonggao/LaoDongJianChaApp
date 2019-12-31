<template>
    <div class="home-container">
        <header id="header" class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"><span class="back-btn">返回</span></a>
            <a class="mui-title">企业基本信息</a>
        </header>
        <div class="card-container">
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>是否关联单位：</label>
                    <input type="text" v-model="companyInfo.SFGLDW" readonly>
                </div>
                <div class="mui-input-row">
                    <label>单位名称：</label>
                    <input type="text" v-model="companyInfo.DWMC" readonly>
                </div>
                <div class="mui-input-row">
                    <label>统一社会信用代码：</label>
                    <input type="text" v-model="companyInfo.TYSHXYDM" readonly>
                </div>
                <div class="mui-input-row">
                    <label>单位地址：</label>
                    <input type="text" v-model="companyInfo.DWDZ" readonly>
                </div>
                <div class="mui-input-row">
                    <label>组织机构代码：</label>
                    <input type="text" v-model="companyInfo.ZZJGDM" readonly>
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>法定代表人：</label>
                    <input type="text" v-model="companyInfo.FDDBRXM" readonly>
                </div>
                <div class="mui-input-row">
                    <label>法定代表人联系电话：</label>
                    <input type="text" v-model="companyInfo.FDDBRDH" readonly>
                </div>
                <div class="mui-input-row">
                    <label>社会保险登记证编码：</label>
                    <input type="text" v-model="companyInfo.SHBXDJZBM" readonly>
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row" data-options='{"type":"date"}' @click="openPicker('handoutDate',$event)">
                    <label data-options='{"type":"date"}'>社会保险登记证发证日期：</label>
                    <input type="text" id="handoutDate" v-model="companyInfo.SHBX" data-options='{"type":"date"}' readonly="readonly">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>工商营业执照登记机关：</label>
                    <input type="text" v-model="companyInfo.GSYYZZDJJG" readonly>
                </div>
                <div class="mui-input-row">
                    <label>工商登记执照种类：</label>
                    <input type="text" v-model="companyInfo.GSDJZZZL" readonly>
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row" data-options='{"type":"date"}' @click="openPicker('handoutDate',$event)">
                    <label data-options='{"type":"date"}'>工商登记发照日期：</label>
                    <input type="text" id="handoutDate" v-model="companyInfo.GSDJFZRQ" data-options='{"type":"date"}' readonly="readonly">
                </div>
                <div class="mui-input-row" data-options='{"type":"date"}' @click="openPicker('effectiveDate',$event)">
                    <label data-options='{"type":"date"}'>工商登记有效期限：</label>
                    <input type="text" id="effectiveDate" v-model="companyInfo.GSDJYXQX" data-options='{"type":"date"}' readonly="readonly">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>经济类型：</label>
                    <input type="text"  v-model="companyInfo.JJLX" readonly>
                </div>
                <div class="mui-input-row">
                    <label>登录注册类型：</label>
                    <input type="text" v-model="companyInfo.DJZCLX" readonly>
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>单位负责人姓名：</label>
                    <input type="text" v-model="companyInfo.DWFZRXM" readonly>
                </div>
                <div class="mui-input-row">
                    <label>单位负责人职务：</label>
                    <input type="text" v-model="companyInfo.DWFZRZW" readonly>
                </div>
                <div class="mui-input-row">
                    <label>单位负责人电话：</label>
                    <input type="text"  v-model="companyInfo.DWFZRLXDH" readonly>
                </div>
                <div class="mui-input-row">
                    <label>劳资负责人姓名：</label>
                    <input type="text" v-model="companyInfo.LZFZRXM" readonly>
                </div>
                <div class="mui-input-row">
                    <label>劳资负责人联系电话：</label>
                    <input type="text" v-model="companyInfo.LZFZRLXDH" readonly>
                </div>
                <div class="mui-input-row">
                    <label>联系人：</label>
                    <input type="text" v-model="companyInfo.LXR" readonly>
                </div>
                <div class="mui-input-row">
                    <label>联系人电话：</label>
                    <input type="text" v-model="companyInfo.LXDH" readonly>
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>诚信等级：</label>
                    <input type="text" v-model="companyInfo.CXDJ" readonly>
                </div>
                <div class="mui-input-row">
                    <label>单位状态：</label>
                    <input type="text" v-model="companyInfo.DWZT" readonly>
                </div>
                <div class="mui-input-row">
                    <label>所属监察机构名称：</label>
                    <input type="text" v-model="companyInfo.SSJCJGMC" readonly>
                </div>
                <div class="mui-input-row">
                    <label>所属网格名称：</label>
                    <input type="text" v-model="companyInfo.SSWGMC" readonly>
                </div>
                <div class="mui-input-row">
                    <label>从业人员总数：</label>
                    <input type="text" v-model="companyInfo.CYRYZS" readonly>
                </div>
                    <div class="mui-input-row">
                    <label>全日制用工：</label>
                    <input type="text" v-model="companyInfo.QRZYG" readonly>
                </div>
                <div class="mui-input-row">
                    <label>全日制用工已签订书面劳动合同人数：</label>
                    <input type="text" v-model="companyInfo.QRZYGYQD" readonly>
                </div>    
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>无固定期限合同人数：</label>
                    <input type="text" v-model="companyInfo.WGDQXHTRS" readonly>
                </div>
                <div class="mui-input-row">
                    <label>固定期限合同人数：</label>
                    <input type="text" v-model="companyInfo.GDQXHTRS" readonly>
                </div>
                <div class="mui-input-row">
                    <label>最低月工资：</label>
                    <input type="text" v-model="companyInfo.ZDYGZ" readonly>
                </div>  
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row" data-options='{"type":"date"}' @click="openPicker('handoutDate',$event)">
                    <label data-options='{"type":"date"}'>工资支付日期：</label>
                    <input type="text" id="handoutDate" v-model="companyInfo.GZZFRQ" data-options='{"type":"date"}' readonly="readonly">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>已参加社会保险总人数：</label>
                    <input type="text" v-model="companyInfo.YCJSHBX" readonly>
                </div>
            </form>
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
            flag: true,
            name: "企业管理" 
        }
    },
    created() {
        this.getCompanyInfo();
        this.$emit("pageChanged");
    },
    methods: {
        goBack(){
			//点击后退
            // this.$router.go(-1);
            this.$router.replace("/companymanager/companyinfolist");            
		},
        getCompanyInfo(){
            // this.getCompanyList();
            this.companyInfo = this.$store.state.companyInfoList[this.id];
        },
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
            /* font-weight: bold; */
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
    .card-container{
        display: flex;
        flex-direction: column;
        position: absolute;
        height: 100%;
        /* padding-bottom: 14%; */
        width: 100%;
        /deep/ .mint-field-core{
            margin: 0 !important;
        }
        .mui-input-group{
            margin: 10px 0;
        }
        .mui-input-group .mui-input-row {
            height: auto;
        }
        .mui-input-row{
            textarea{
                border: 0px;
                margin-bottom: 0;
            }
        }
        .mui-input-row label~input, .mui-input-row label~select, .mui-input-row label~textarea {
            position: absolute;
            float: right;
            width: 65%;
            top: 50%;
            transform: translateY(-50%);
            margin-bottom: 0;
            padding-left: 0;
            border: 0;
        }
        /* .info-container{ 
            padding: 8px 4px;
            background-color: white;
            border-bottom: thin solid #5e5e5e;
            border-bottom-width: 1px;
            vertical-align: middle;
            font-size: 15px;
            color: black;
            label{
                
            }
            input{
                margin: 0;
            }
        } */
    }
}    
</style>