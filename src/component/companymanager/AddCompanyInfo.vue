<template>
    <div class="home-container">
        <header id="header" class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"><span class="back-btn">返回</span></a>
            <a class="mui-title">企业基本信息</a>
            <!-- <mt-button type="primary" class="mui-pull-right" @click="addInspectionCompany">添加</mt-button> -->
            <a class="mui-pull-right mui-icon mui-icon-right-nav" @click="addCompanyInfo">添加</a>
        </header>
        <div class="card-container">
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>是否关联<br>单位：</label>
                    <select name="caseSource" v-model="pd.SFGLDW" class="mui-select fluid">
                        <option value="是" selected>是</option>
                        <option value="否">否</option>
                    </select>
                </div>
                <div class="mui-input-row">
                    <label>单位名称：</label>
                    <input type="text" placeholder="输入单位名称" v-model="pd.DWMC">
                </div>
                <div class="mui-input-row">
                    <label>统一社会<br>信用代码：</label>
                    <input type="text" placeholder="输入统一社会信用代码" v-model="pd.TYSHXYDM">
                </div>
                <div class="mui-input-row">
                    <label>单位地址：</label>
                    <input type="text" placeholder="输入单位地址" v-model="pd.DWDZ">
                </div>
                <div class="mui-input-row">
                    <label>组织机构<br>代码：</label>
                    <input type="text" placeholder="输入组织机构代码" v-model="pd.ZZJGDM">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>法定代表人：</label>
                    <input type="text" placeholder="输入法定代表人" v-model="pd.FDDBRXM">
                </div>
                <div class="mui-input-row">
                    <label>法定代表人<br>联系电话：</label>
                    <input type="text" placeholder="输入法定代表人联系电话" v-model="pd.FDDBRDH">
                </div>
                <div class="mui-input-row">
                    <label>社会保险登记证编码：</label>
                    <input type="text" placeholder="输入社会保险登记证编码" v-model="pd.SHBXDJZBM">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row" data-options='{"type":"date"}' @click="openPicker('SHBX',$event)">
                    <label data-options='{"type":"date"}'>社会保险登记证发证日期：</label>
                    <input type="text" id="SHBX" v-model="pd.SHBX" data-options='{"type":"date"}' readonly="readonly">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>工商营业执照登记机关：</label>
                    <input type="text" placeholder="输入工商营业执照登记机关"  v-model="pd.GSYYZZDJJG">
                </div>
                <div class="mui-input-row">
                    <label>工商登记执照种类：</label>
                    <input type="text" placeholder="输入工商登记执照种类"  v-model="pd.GSDJZZZL">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row" data-options='{"type":"date"}' @click="openPicker('GSDJFZRQ',$event)">
                    <label data-options='{"type":"date"}'>工商登记发照日期：</label>
                    <input type="text" id="GSDJFZRQ" v-model="pd.GSDJFZRQ" data-options='{"type":"date"}' readonly="readonly">
                </div>
                <div class="mui-input-row" data-options='{"type":"date"}' @click="openPicker('GSDJYXQX',$event)">
                    <label data-options='{"type":"date"}'>工商登记有效期限：</label>
                    <input type="text" id="GSDJYXQX" v-model="pd.GSDJYXQX" data-options='{"type":"date"}' readonly="readonly">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>经济类型：</label>
                    <input type="text" placeholder="输入经济类型"  v-model="pd.JJLX">
                </div>
                <div class="mui-input-row">
                    <label>登录注册<br>类型：</label>
                    <input type="text" placeholder="输入登录注册类型" v-model="pd.DJZCLX">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>单位负责人<br>姓名：</label>
                    <input type="text" placeholder="输入单位负责人姓名" v-model="pd.DWFZRXM">
                </div>
                <div class="mui-input-row">
                    <label>单位负责人<br>职务：</label>
                    <input type="text" placeholder="输入单位负责人职务" v-model="pd.DWFZRZW">
                </div>
                <div class="mui-input-row">
                    <label>单位负责人<br>电话：</label>
                    <input type="text" placeholder="输入单位负责人电话" v-model="pd.DWFZRLXDH">
                </div>
                <div class="mui-input-row">
                    <label>劳资负责人<br>姓名：</label>
                    <input type="text" placeholder="输入劳资负责人姓名" v-model="pd.LZFZRXM">
                </div>
                <div class="mui-input-row">
                    <label>劳资负责人<br>联系电话：</label>
                    <input type="text" placeholder="输入劳资负责人联系电话" v-model="pd.LZFZRLXDH">
                </div>
                <div class="mui-input-row">
                    <label>联系人：</label>
                    <input type="text" placeholder="输入联系人" v-model="pd.LXR">
                </div>
                <div class="mui-input-row">
                    <label>联系人<br>电话：</label>
                    <input type="text" placeholder="输入联系人电话" v-model="pd.LXDH">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>诚信等级：</label>
                    <input type="text" placeholder="输入诚信等级" v-model="pd.CXDJ">
                </div>
                <div class="mui-input-row">
                    <label>单位状态：</label>
                    <input type="text" placeholder="输入单位状态" v-model="pd.DWZT">
                </div>
                <div class="mui-input-row">
                    <label>所属监察机构名称：</label>
                    <input type="text" placeholder="输入所属监察机构名称" v-model="pd.SSJCJGMC">
                </div>
                <div class="mui-input-row">
                    <label>所属网格名称：</label>
                    <input type="text" placeholder="输入所属监察机构名称" v-model="pd.SSWGMC">
                </div>
                <div class="mui-input-row">
                    <label>从业人员总数：</label>
                    <input type="text" placeholder="输入从业人员总数" v-model="pd.CYRYZS">
                </div>
                    <div class="mui-input-row">
                    <label>全日制用工：</label>
                    <input type="text" placeholder="输入全日制用工" v-model="pd.QRZYG">
                </div>
                <div class="mui-input-row">
                    <label>全日制用工已签订书面劳动合同人数：</label>
                    <input type="text" placeholder="输入全日制用工已签订书面劳动合同人数" v-model="pd.QRZYGYQD">
                </div>    
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>无固定期限合同人数：</label>
                    <input type="text" placeholder="输入无固定期限合同人数" v-model="pd.WGDQXHTRS">
                </div>
                <div class="mui-input-row">
                    <label>固定期限合同人数：</label>
                    <input type="text" placeholder="输入固定期限合同人数" v-model="pd.GDQXHTRS">
                </div>
                <div class="mui-input-row">
                    <label>最低月工资：</label>
                    <input type="text" placeholder="输入最低月工资" v-model="pd.ZDYGZ">
                </div>  
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row" data-options='{"type":"date"}' @click="openPicker('GZZFRQ',$event)">
                    <label data-options='{"type":"date"}'>工资支付日期：</label>
                    <input type="text" id="GZZFRQ" v-model="pd.GZZFRQ" data-options='{"type":"date"}' readonly="readonly">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>已参加社会保险总人数：</label>
                    <input type="text" placeholder="输入已参加社会保险总人数" v-model="pd.YCJSHBX">
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import { Toast, DatetimePicker } from "mint-ui";



export default{
    data() {
        return {
            pd: {
                DWMC: "",
                ENTERPRISE_ID: '',
                SFGLDW: '是'
            },
            picker: null,
            ENTERPRISE_ID: '',	//主键ID
            // pickerValue: "",
        }
    },
    component:{

    },
    created() {
        this.$emit("pageChanged");
    },
    mounted() {
    },
    methods: {
        addCompanyInfo(){
            if (this.pd.DWMC == "" || this.pd.DWMC == undefined){
                Toast("单位名称不能未空！！");
            }
            else{
                var CompanyInfo = {
                    ENTERPRISE_ID:this.pd.ENTERPRISE_ID || "",
				    SFGLDW:this.pd.SFGLDW || "",
				    DWMC:this.pd.DWMC || "",
				    TYSHXYDM:this.pd.TYSHXYDM || "",
				    DWDZ:this.pd.DWDZ || "",
				    ZZJGDM:this.pd.ZZJGDM || "",
				    FDDBRXM:this.pd.FDDBRXM || "",
				    FDDBRDH:this.pd.FDDBRDH || "",
				    SHBXDJZBM:this.pd.SHBXDJZBM || "",
				    SHBX:this.pd.SHBX || "",
				    GSDJZZZL:this.pd.GSDJZZZL || "",
				    GSYYZZDJJG:this.pd.GSYYZZDJJG || "",
				    GSDJFZRQ:this.pd.GSDJFZRQ || "",
				    GSDJYXQX:this.pd.GSDJYXQX || "",
				    JJLX:this.pd.JJLX || "",
				    DJZCLX:this.pd.DJZCLX || "",
				    DWFZRXM:this.pd.DWFZRXM || "",
				    DWFZRZW:this.pd.DWFZRZW || "",
				    DWFZRLXDH:this.pd.DWFZRLXDH || "",
				    LXR:this.pd.LXR || "",
				    LXDH:this.pd.LXDH || "",
				    LZFZRXM:this.pd.LZFZRXM || "",
				    LZFZRLXDH:this.pd.LZFZRLXDH || "",
				    CXDJ:this.pd.CXDJ || "",
				    DWZT:this.pd.DWZT || "",
				    SSJCJGMC:this.pd.SSJCJGMC || "",
				    SSWGMC:this.pd.SSWGMC || "",
				    CYRYZS:this.pd.CYRYZS || "",
				    QRZYG:this.pd.QRZYG || "",
				    QRZYGYQD:this.pd.QRZYGYQD || "",
				    WGDQXHTRS:this.pd.WGDQXHTRS || "",
				    GDQXHTRS:this.pd.GDQXHTRS || "", 
				    ZDYGZ:this.pd.ZDYGZ || "",
				    GZZFRQ:this.pd.GZZFRQ || "",
				    YCJSHBX:this.pd.YCJSHBX || "",
                    tm:new Date().getTime()
                };
                
                // 增加企业信息
                this.$http.post('enterprise/add',CompanyInfo, {withCredentials: true}).then(result => {
                    // console.log(result);
                    if( result.body.result == "success" ){
                        this.$store.commit("addCompanyInfo",result.body.Newdata);
                        // this.$router.push("/companymanager/companyinfolist");
                        // this.$router.replace("/companymanager/companyinfolist");
                        this.$router.go(-1);
                    }
                    else{
                        Toast("添加数据失败");
                    }
                }, error => {
                    console.log(error);
                });
            }
                // this.$store.commit("addInspectionCompany", inspectionCompany);
            this.pd = {
                DWMC: ""
            };
        },
        openPicker(id,$event){
            var that = this;
            var _self = $event.target;
            var item = document.getElementById(id);
            if(that.picker){
                that.picker.show(function (rs) {
                    // that.datetime = rs.text;
                    item.value = rs.text;
                    that.picker.dispose();
                    that.picker = null;
                });
            }
            else{
                var optionsJson = _self.getAttribute('data-options') || '{}';
                var options = JSON.parse(optionsJson);
                that.picker = new window.mui.DtPicker(options);
			    that.picker.show(function(rs) {
                    item.value = rs.text;
                    that.picker.dispose();
                    that.picker = null;
                });
            }
        },
        goBack(){
            // this.$router.replace("/companymanager/companyinfolist");
            this.$router.go(-1);
        }
    }
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
            /* background-color: inherit; */
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
            margin-top: 15px;
            /* background-color: inherit; */
            font-weight: bold;
            line-height: 52px;
        }
    }
    .card-container{
        position: absolute;
        height: 100%;
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
    }
}
</style>