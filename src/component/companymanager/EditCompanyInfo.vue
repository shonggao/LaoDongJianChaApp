<template>
    <div class="home-container">
        <header id="header" class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"><span class="back-btn">返回</span></a>
            <a class="mui-title">企业基本信息</a>
            <!-- <mt-button type="primary" class="mui-pull-right" @click="editCompanyInfo">完成</mt-button> -->
            <a class="mui-pull-right mui-icon mui-icon-right-nav" @click="editCompanyInfo">完成</a>
        </header>
        <div class="card-container">
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>是否关联单位：</label>
                    <select name="caseSource" v-model="companyInfo.SFGLDW" class="mui-select fluid">
                        <option value="是" selected>是</option>
                        <option value="否">否</option>
                    </select>
                </div>
                <div class="mui-input-row">
                    <label>单位名称：</label>
                    <input type="text" placeholder="输入单位名称" v-model="companyInfo.DWMC">
                </div>
                <div class="mui-input-row">
                    <label>统一社会信用代码：</label>
                    <input type="text" placeholder="输入统一社会信用代码" v-model="companyInfo.TYSHXYDM">
                </div>
                <div class="mui-input-row">
                    <label>单位地址：</label>
                    <input type="text" placeholder="输入单位地址" v-model="companyInfo.DWDZ">
                </div>
                <div class="mui-input-row">
                    <label>组织机构代码：</label>
                    <input type="text" placeholder="输入组织机构代码" v-model="companyInfo.ZZJGDM">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>法定代表人：</label>
                    <input type="text" placeholder="输入法定代表人" v-model="companyInfo.FDDBRXM">
                </div>
                <div class="mui-input-row">
                    <label>法定代表人联系电话：</label>
                    <input type="text" placeholder="输入法定代表人联系电话" v-model="companyInfo.FDDBRDH">
                </div>
                <div class="mui-input-row">
                    <label>社会保险登记证编码：</label>
                    <input type="text" placeholder="输入社会保险登记证编码" v-model="companyInfo.SHBXDJZBM">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row" data-options='{"type":"date"}' @click="openPicker('SHBX',$event)">
                    <label data-options='{"type":"date"}'>社会保险登记证发证日期：</label>
                    <input type="text" id="SHBX" v-model="companyInfo.SHBX" data-options='{"type":"date"}' readonly="readonly">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>工商营业执照登记机关：</label>
                    <input type="text" placeholder="输入工商营业执照登记机关"  v-model="companyInfo.GSYYZZDJJG">
                </div>
                <div class="mui-input-row">
                    <label>工商登记执照种类：</label>
                    <input type="text" placeholder="输入工商登记执照种类"  v-model="companyInfo.GSDJZZZL">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row" data-options='{"type":"date"}' @click="openPicker('GSDJFZRQ',$event)">
                    <label data-options='{"type":"date"}'>工商登记发照日期：</label>
                    <input type="text" id="GSDJFZRQ" v-model="companyInfo.GSDJFZRQ" data-options='{"type":"date"}' readonly="readonly">
                </div>
                <div class="mui-input-row" data-options='{"type":"date"}' @click="openPicker('GSDJYXQX',$event)">
                    <label data-options='{"type":"date"}'>工商登记有效期限：</label>
                    <input type="text" id="GSDJYXQX" v-model="companyInfo.GSDJYXQX" data-options='{"type":"date"}' readonly="readonly">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>经济类型：</label>
                    <input type="text" placeholder="输入经济类型"  v-model="companyInfo.JJLX">
                </div>
                <div class="mui-input-row">
                    <label>登录注册类型：</label>
                    <input type="text" placeholder="输入登录注册类型" v-model="companyInfo.DJZCLX">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>单位负责人姓名：</label>
                    <input type="text" placeholder="输入单位负责人姓名" v-model="companyInfo.DWFZRXM">
                </div>
                <div class="mui-input-row">
                    <label>单位负责人职务：</label>
                    <input type="text" placeholder="输入单位负责人职务" v-model="companyInfo.DWFZRZW">
                </div>
                <div class="mui-input-row">
                    <label>单位负责人电话：</label>
                    <input type="text" placeholder="输入单位负责人电话" v-model="companyInfo.DWFZRLXDH">
                </div>
                <div class="mui-input-row">
                    <label>劳资负责人姓名：</label>
                    <input type="text" placeholder="输入劳资负责人姓名" v-model="companyInfo.LZFZRXM">
                </div>
                <div class="mui-input-row">
                    <label>劳资负责人联系电话：</label>
                    <input type="text" placeholder="输入劳资负责人联系电话" v-model="companyInfo.LZFZRLXDH">
                </div>
                <div class="mui-input-row">
                    <label>联系人：</label>
                    <input type="text" placeholder="输入联系人" v-model="companyInfo.LXR">
                </div>
                <div class="mui-input-row">
                    <label>联系人电话：</label>
                    <input type="text" placeholder="输入联系人电话" v-model="companyInfo.LXDH">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>诚信等级：</label>
                    <input type="text" placeholder="输入诚信等级" v-model="companyInfo.CXDJ">
                </div>
                <div class="mui-input-row">
                    <label>单位状态：</label>
                    <input type="text" placeholder="输入单位状态" v-model="companyInfo.DWZT">
                </div>
                <div class="mui-input-row">
                    <label>所属监察机构名称：</label>
                    <input type="text" placeholder="输入所属监察机构名称" v-model="companyInfo.SSJCJGMC">
                </div>
                <div class="mui-input-row">
                    <label>所属网格名称：</label>
                    <input type="text" placeholder="输入所属监察机构名称" v-model="companyInfo.SSWGMC">
                </div>
                <div class="mui-input-row">
                    <label>从业人员总数：</label>
                    <input type="text" placeholder="输入从业人员总数" v-model="companyInfo.CYRYZS">
                </div>
                    <div class="mui-input-row">
                    <label>全日制用工：</label>
                    <input type="text" placeholder="输入全日制用工" v-model="companyInfo.QRZYG">
                </div>
                <div class="mui-input-row">
                    <label>全日制用工已签订书面劳动合同人数：</label>
                    <input type="text" placeholder="输入全日制用工已签订书面劳动合同人数" v-model="companyInfo.QRZYGYQD">
                </div>    
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>无固定期限合同人数：</label>
                    <input type="text" placeholder="输入无固定期限合同人数" v-model="companyInfo.WGDQXHTRS">
                </div>
                <div class="mui-input-row">
                    <label>固定期限合同人数：</label>
                    <input type="text" placeholder="输入固定期限合同人数" v-model="companyInfo.GDQXHTRS">
                </div>
                <div class="mui-input-row">
                    <label>最低月工资：</label>
                    <input type="text" placeholder="输入最低月工资" v-model="companyInfo.ZDYGZ">
                </div>  
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row" data-options='{"type":"date"}' @click="openPicker('GZZFRQ',$event)">
                    <label data-options='{"type":"date"}'>工资支付日期：</label>
                    <input type="text" id="GZZFRQ" v-model="companyInfo.GZZFRQ" data-options='{"type":"date"}' readonly="readonly">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>已参加社会保险总人数：</label>
                    <input type="text" placeholder="输入已参加社会保险总人数" v-model="companyInfo.YCJSHBX">
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
            companyInfo: {},
            // companyList: [

            // ],
            // name: "企业管理" ,
            // showCount: -1,	//每页显示条数(这个是系统设置里面配置的，初始为-1即可，固定此写法)
            // KEYWORDS:'',	//检索条件,关键词
            // page: [],		//分页类
            // currentPage: 1,	//当前页码
        }
    },
    created() {
        this.getCompanyInfo();
        this.$emit("pageChanged");
    },
    methods: {
        getCompanyInfo(){
            // this.getCompanyList();
            this.companyInfo = this.$store.state.companyInfoList[this.id];
        },
        goBack(){
            this.$router.replace("/companymanager/companyinfolist"); 
        },
        editCompanyInfo(){
            // 修改企业信息
            // this.$store.commit('updateCompanyInfo', {
            //     index: this.id,
            //     companyInfo: this.companyInfo
            // });  
            // 返回企业信息列表界面
            if (this.companyInfo.DWMC == ""){
                Toast("单位名称不能未空！！");
            }
            else{
                var CompanyInfo = {
                    ENTERPRISE_ID:this.companyInfo.ENTERPRISE_ID,
				    SFGLDW:this.companyInfo.SFGLDW,
				    DWMC:this.companyInfo.DWMC,
				    TYSHXYDM:this.companyInfo.TYSHXYDM,
				    DWDZ:this.companyInfo.DWDZ,
				    ZZJGDM:this.companyInfo.ZZJGDM,
				    FDDBRXM:this.companyInfo.FDDBRXM,
				    FDDBRDH:this.companyInfo.FDDBRDH,
				    SHBXDJZBM:this.companyInfo.SHBXDJZBM,
				    SHBX:this.companyInfo.SHBX,
				    GSDJZZZL:this.companyInfo.GSDJZZZL,
				    GSYYZZDJJG:this.companyInfo.GSYYZZDJJG,
				    GSDJFZRQ:this.companyInfo.GSDJFZRQ,
				    GSDJYXQX:this.companyInfo.GSDJYXQX,
				    JJLX:this.companyInfo.JJLX,
				    DJZCLX:this.companyInfo.DJZCLX,
				    DWFZRXM:this.companyInfo.DWFZRXM,
				    DWFZRZW:this.companyInfo.DWFZRZW,
				    DWFZRLXDH:this.companyInfo.DWFZRLXDH,
				    LXR:this.companyInfo.LXR,
				    LXDH:this.companyInfo.LXDH,
				    LZFZRXM:this.companyInfo.LZFZRXM,
				    LZFZRLXDH:this.companyInfo.LZFZRLXDH,
				    CXDJ:this.companyInfo.CXDJ,
				    DWZT:this.companyInfo.DWZT,
				    SSJCJGMC:this.companyInfo.SSJCJGMC,
				    SSWGMC:this.companyInfo.SSWGMC,
				    CYRYZS:this.companyInfo.CYRYZS,
				    QRZYG:this.companyInfo.QRZYG,
				    QRZYGYQD:this.companyInfo.QRZYGYQD,
				    WGDQXHTRS:this.companyInfo.WGDQXHTRS,
				    GDQXHTRS:this.companyInfo.GDQXHTRS,
				    ZDYGZ:this.companyInfo.ZDYGZ,
				    GZZFRQ:this.companyInfo.GZZFRQ,
				    YCJSHBX:this.companyInfo.YCJSHBX,
                    tm:new Date().getTime()
                };
                
                // 增加企业信息
                this.$http.post('enterprise/edit',CompanyInfo, {withCredentials: true}).then(result => {
                    // console.log(result);
                    if( result.body.result == "success" ){
                        this.$store.commit("updateCompanyInfo",{
                            index: this.id,
                            companyInfo: this.companyInfo
                        });
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
                // var id = _self.getAttribute('id');
                // console.log(mui.picker);
                that.picker = new window.mui.DtPicker(options);
                that.picker.show(function(rs) {
                    console.log("show callback")
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
                    that.picker.dispose();
                    that.picker = null;
                });
            }
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