<template>
    <div class="home-container">
        <header id="header" class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"><span class="back-btn">返回</span></a>
            <a class="mui-title">企业年检信息</a>
            <a class="mui-pull-right mui-icon mui-icon-right-nav" @click="editInspectionCompanyInfo">保存</a>
        </header>
        <div class="card-container">
            <form class="mui-input-group">
                <div class="mui-input-row" data-options='{"type":"date" , "year-format":"{value}" }' @click="openPicker('NJNF_NJ',$event)">
                    <label data-options='{"type":"date" , "year-format":"{value}" }'>年份：</label>
                    <input type="text" id="NJNF_NJ" v-model="pd.NJNF_NJ" data-options='{"type":"date", "year-format":"{value}年" }' readonly="readonly">
                </div>
                <div class="mui-input-row">
                    <label>信用评级：</label>
                    <select name="caseSource" id="caseSource" class="mui-select fluid" v-model="pd.NJPJ_NJ"> 
                        <option value="A" selected>A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                    </select>
                </div>
                <div class="mui-input-row">
                    <label>是否关联<br>单位：</label>
                    <select name="caseSource" v-model="pd.SFGLDW_NJ" class="mui-select fluid">
                        <option value="是" selected>是</option>
                        <option value="否">否</option>
                    </select>
                </div>
                <div class="mui-input-row">
                    <label>单位名称：</label>
                    <input type="text" placeholder="输入单位名称" v-model="pd.DWMC_NJ">
                </div>
                <div class="mui-input-row">
                    <label>统一社会<br>信用代码：</label>
                    <input type="text" placeholder="输入统一社会信用代码" v-model="pd.TYSHXYDM_NJ">
                </div>
                <div class="mui-input-row">
                    <label>单位地址：</label>
                    <input type="text" placeholder="输入单位地址" v-model="pd.DWDZ_NJ">
                </div>
                <div class="mui-input-row">
                    <label>组织机构<br>代码：</label>
                    <input type="text" placeholder="输入组织机构代码" v-model="pd.ZZJGDM_NJ">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>法定代表人：</label>
                    <input type="text" placeholder="输入法定代表人" v-model="pd.FDDBRXM_NJ">
                </div>
                <div class="mui-input-row">
                    <label>法定代表人<br>联系电话：</label>
                    <input type="text" placeholder="输入法定代表人联系电话" v-model="pd.FDDBRDH_NJ">
                </div>
                <div class="mui-input-row">
                    <label>社会保险登记证编码：</label>
                    <input type="text" placeholder="输入社会保险登记证编码" v-model="pd.SHBXDJZBM_NJ">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row" data-options='{"type":"date"}' @click="openPicker('SHBX_NJ',$event)">
                    <label data-options='{"type":"date"}'>社会保险登记证发证日期：</label>
                    <input type="text" id="SHBX_NJ" v-model="pd.SHBX_NJ" data-options='{"type":"date"}' readonly="readonly">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>工商营业执照登记机关：</label>
                    <input type="text" placeholder="输入工商营业执照登记机关"  v-model="pd.GSYYZZDJJG_NJ">
                </div>
                <div class="mui-input-row">
                    <label>工商登记执照种类：</label>
                    <input type="text" placeholder="输入工商登记执照种类"  v-model="pd.GSDJZZZL_NJ">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row" data-options='{"type":"date"}' @click="openPicker('GSDJFZRQ_NJ',$event)">
                    <label data-options='{"type":"date"}'>工商登记发照日期：</label>
                    <input type="text" id="GSDJFZRQ_NJ" v-model="pd.GSDJFZRQ_NJ" data-options='{"type":"date"}' readonly="readonly">
                </div>
                <div class="mui-input-row" data-options='{"type":"date"}' @click="openPicker('GSDJYXQX_NJ',$event)">
                    <label data-options='{"type":"date"}'>工商登记有效期限：</label>
                    <input type="text" id="GSDJYXQX_NJ" v-model="pd.GSDJYXQX_NJ" data-options='{"type":"date"}' readonly="readonly">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>经济类型：</label>
                    <input type="text" placeholder="输入经济类型"  v-model="pd.JJLX_NJ">
                </div>
                <div class="mui-input-row">
                    <label>登录注册<br>类型：</label>
                    <input type="text" placeholder="输入登录注册类型" v-model="pd.DJZCLX_NJ">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>单位负责人<br>姓名：</label>
                    <input type="text" placeholder="输入单位负责人姓名" v-model="pd.DWFZRXM_NJ">
                </div>
                <div class="mui-input-row">
                    <label>单位负责人<br>职务：</label>
                    <input type="text" placeholder="输入单位负责人职务" v-model="pd.DWFZRZW_NJ">
                </div>
                <div class="mui-input-row">
                    <label>单位负责人<br>电话：</label>
                    <input type="text" placeholder="输入单位负责人电话" v-model="pd.DWFZRLXDH_NJ">
                </div>
                <div class="mui-input-row">
                    <label>劳资负责人<br>姓名：</label>
                    <input type="text" placeholder="输入劳资负责人姓名" v-model="pd.LZFZRXM_NJ">
                </div>
                <div class="mui-input-row">
                    <label>劳资负责人<br>联系电话：</label>
                    <input type="text" placeholder="输入劳资负责人联系电话" v-model="pd.LZFZRLXDH_NJ">
                </div>
                <div class="mui-input-row">
                    <label>联系人：</label>
                    <input type="text" placeholder="输入联系人" v-model="pd.LXR_NJ">
                </div>
                <div class="mui-input-row">
                    <label>联系人<br>电话：</label>
                    <input type="text" placeholder="输入联系人电话" v-model="pd.LXDH_NJ">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>诚信等级：</label>
                    <input type="text" placeholder="输入诚信等级" v-model="pd.CXDJ_NJ">
                </div>
                <div class="mui-input-row">
                    <label>单位状态：</label>
                    <input type="text" placeholder="输入单位状态" v-model="pd.DWZT_NJ">
                </div>
                <div class="mui-input-row">
                    <label>所属监察机构名称：</label>
                    <input type="text" placeholder="输入所属监察机构名称" v-model="pd.SSJCJGMC_NJ">
                </div>
                <div class="mui-input-row">
                    <label>所属网格名称：</label>
                    <input type="text" placeholder="输入所属监察机构名称" v-model="pd.SSWGMC_NJ">
                </div>
                <div class="mui-input-row">
                    <label>从业人员总数：</label>
                    <input type="text" placeholder="输入从业人员总数" v-model="pd.CYRYZS_NJ">
                </div>
                    <div class="mui-input-row">
                    <label>全日制用工：</label>
                    <input type="text" placeholder="输入全日制用工" v-model="pd.QRZYG_NJ">
                </div>
                <div class="mui-input-row">
                    <label>全日制用工已签订书面劳动合同人数：</label>
                    <input type="text" placeholder="输入全日制用工已签订书面劳动合同人数" v-model="pd.QRZYGYQD_NJ">
                </div>    
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>无固定期限合同人数：</label>
                    <input type="text" placeholder="输入无固定期限合同人数" v-model="pd.WGDQXHTRS_NJ">
                </div>
                <div class="mui-input-row">
                    <label>固定期限合同人数：</label>
                    <input type="text" placeholder="输入固定期限合同人数" v-model="pd.GDQXHTRS_NJ">
                </div>
                <div class="mui-input-row">
                    <label>最低月工资：</label>
                    <input type="text" placeholder="输入最低月工资" v-model="pd.ZDYGZ_NJ">
                </div>  
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row" data-options='{"type":"date"}' @click="openPicker('GZZFRQ_NJ',$event)">
                    <label data-options='{"type":"date"}'>工资支付日期：</label>
                    <input type="text" id="GZZFRQ_NJ" v-model="pd.GZZFRQ_NJ" data-options='{"type":"date"}' readonly="readonly">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>已参加社会保险总人数：</label>
                    <input type="text" placeholder="输入已参加社会保险总人数" v-model="pd.YCJSHBX_NJ">
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import { Toast, MessageBox } from 'mint-ui';

export default {
    data() {
        return {
            QIYEXINXIGUANLI_ID: this.$route.params.id,
            QIYEXINXIGUANLIMX_ID: this.$route.query.FID,
            pd: {},
        }
    },
    created() {
        this.getInspectionCompanyInfo();
    },
    methods: {
        getInspectionCompanyInfo(){
            // this.inspectionCompanyInfo = this.$store.inspectionCompanyInfoList[this.id];
            var data = {
                QIYEXINXIGUANLIMX_ID: this.QIYEXINXIGUANLIMX_ID, tm: new Date().getTime() 
            }
            this.$http.post('qiyexinxiguanlimx/goEdit',data,{withCredentials: true}).then(
                result => {
                    if( result.body.result == "success" ){
                        this.pd = result.body.pd;
                    }
                    else{
                        Toast("添加数据失败");
                    }
                },
                error => {
                    console.log(error);
                }
            )
            
        },
        goBack(){
            this.$router.replace('/companymanager/inspectioncompanyinfolist/'+this.id);
        },
        openPicker(id,$event){
            var that = this;
            var _self = $event.target;
            var item = document.getElementById(id);
            console.log(item.value);
            if(item.picker){
                item.picker.show(function (rs) {
                    // that.datetime = rs.text;
                    item.value = rs.text;
                    that.pd[id] = rs.text;
                    item.picker.dispose();
                    item.picker = null;
                });
            }
            else{
                var optionsJson = _self.getAttribute('data-options') || '{}';
                var options = JSON.parse(optionsJson);
                // var id = _self.getAttribute('id');
                // console.log(mui.picker);
                item.picker = new window.mui.DtPicker(options);
                item.picker.show(function(rs) {
                    /*
                        * rs.value 拼合后的 value
                        * rs.text 拼合后的 text
                        * rs.y 年，可以通过 rs.y.vaue 和 rs.y.text 获取值和文本
                        * rs.m 月，用法同年
                        * rs.d 日，用法同年
                        * rs.h 时，用法同年
                        * rs.i 分（minutes 的第二个字母），用法同年
                        */
                    // result.innerText = '选择结果: ' + rs.text;
                    // that.datetime = rs.text;
                    item.value = rs.text;
                    that.pd[id] = rs.text;
                    /* 
                        * 返回 false 可以阻止选择框的关闭
                        * return false;
                        */
                    /*
                        * 释放组件资源，释放后将将不能再操作组件
                        * 通常情况下，不需要示放组件，new DtPicker(options) 后，可以一直使用。
                        * 当前示例，因为内容较多，如不进行资原释放，在某些设备上会较慢。
                        * 所以每次用完便立即调用 dispose 进行释放，下次用时再创建新实例。
                        */
                    item.picker.dispose();
                    item.picker = null;
                });
            }
        },
        editInspectionCompanyInfo(){
            if (this.pd.NJNF_NJ == "" || this.pd.NJNF_NJ == undefined){
                Toast("年检时间不能为空!!");
            }
            else{
                var InspectionCompanyInfo = {
                    QIYEXINXIGUANLIMX_ID: this.QIYEXINXIGUANLIMX_ID,
                    QIYEXINXIGUANLI_ID: this.QIYEXINXIGUANLI_ID,
                    NJNF_NJ: this.pd.NJNF_NJ,
                    NJPJ_NJ: this.pd.NJPJ_NJ,
                    SFGLDW_NJ:this.pd.SFGLDW_NJ || "",
				    DWMC_NJ:this.pd.DWMC_NJ || "",
				    TYSHXYDM_NJ:this.pd.TYSHXYDM_NJ || "",
				    DWDZ_NJ:this.pd.DWDZ_NJ || "",
				    ZZJGDM_NJ:this.pd.ZZJGDM_NJ || "",
				    FDDBRXM_NJ:this.pd.FDDBRXM_NJ || "",
				    FDDBRDH_NJ:this.pd.FDDBRDH_NJ || "",
				    SHBXDJZBM_NJ:this.pd.SHBXDJZBM_NJ || "",
				    SHBX_NJ:this.pd.SHBX_NJ || "",
				    GSDJZZZL_NJ:this.pd.GSDJZZZL_NJ || "",
				    GSYYZZDJJG_NJ:this.pd.GSYYZZDJJG_NJ || "",
				    GSDJFZRQ_NJ:this.pd.GSDJFZRQ_NJ || "",
				    GSDJYXQX_NJ:this.pd.GSDJYXQX_NJ || "",
				    JJLX_NJ:this.pd.JJLX_NJ || "",
				    DJZCLX_NJ:this.pd.DJZCLX_NJ || "",
				    DWFZRXM_NJ:this.pd.DWFZRXM_NJ || "",
				    DWFZRZW_NJ:this.pd.DWFZRZW_NJ || "",
				    DWFZRLXDH_NJ:this.pd.DWFZRLXDH_NJ || "",
				    LXR_NJ:this.pd.LXR_NJ || "",
				    LXDH_NJ:this.pd.LXDH_NJ || "",
				    LZFZRXM_NJ:this.pd.LZFZRXM_NJ || "",
				    LZFZRLXDH_NJ:this.pd.LZFZRLXDH_NJ || "",
				    CXDJ_NJ:this.pd.CXDJ_NJ || "",
				    DWZT_NJ:this.pd.DWZT_NJ || "",
				    SSJCJGMC_NJ:this.pd.SSJCJGMC_NJ || "",
				    SSWGMC_NJ:this.pd.SSWGMC_NJ || "",
				    CYRYZS_NJ:this.pd.CYRYZS_NJ || "",
				    QRZYG_NJ:this.pd.QRZYG_NJ || "",
				    QRZYGYQD_NJ:this.pd.QRZYGYQD_NJ || "",
				    WGDQXHTRS_NJ:this.pd.WGDQXHTRS_NJ || "",
				    GDQXHTRS_NJ:this.pd.GDQXHTRS_NJ || "", 
				    ZDYGZ_NJ:this.pd.ZDYGZ_NJ || "",
				    GZZFRQ_NJ:this.pd.GZZFRQ_NJ || "",
                    YCJSHBX_NJ:this.pd.YCJSHBX_NJ || "",
                    NJNF_NJ: this.pd.NJNF_NJ || "",
                    NJPJ_NJ: this.pd.NJPJ_NJ || "",
                    tm:new Date().getTime()
                };
                this.$http.post('qiyexinxiguanlimx/edit',InspectionCompanyInfo,{withCredentials: true}).then(
                    result => {
                        if( result.body.result == "success" ){
                            this.$store.commit("updateCompanyInfo",{
                                index: this.id,
                                companyInfo: this.companyInfo
                            });
                            this.$router.go(-1);
                        }
                        else{
                            Toast("添加数据失败");
                        }
                    },
                    error => {
                        console.log(error);
                    }
                )
                
                this.pd = {};
            }
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
            margin-top: 15px;
            /* background-color: inherit; */
            font-weight: bold;
            line-height: 52px;
        }
    }
    .card-container{
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
    }
}    
</style>