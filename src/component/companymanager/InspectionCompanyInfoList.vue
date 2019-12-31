<template>
    <div class="home-container">
        <header id="header" class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"><span class="back-btn">返回</span></a>
            <a class="mui-title">企业年检记录</a>
            <a class="mui-icon mui-icon-plusempty mui-pull-right" @click="goAddInspectionCompanyInfo"></a>
        </header>
        <div class="card-container">
            <!-- <div class="cell-container" v-for="(item,index) in inspectionCompanyInfoList" :key="item.QIYEXINXIGUANLIMX_ID" @click.stop="goInspectionCompanyInfo(item.QIYEXINXIGUANLIMX_ID)">
                <mt-cell :title="(2019-index)+'年记录'"  is-link>
                    <span>企业年检</span> 
                    <img slot="icon" src="../../image/企业年检.png" width="34" height="34">
                </mt-cell>
            </div> -->
            <div class="mui-card" v-for="(item,index) in inspectionCompanyInfoList" :key="item.QIYEXINXIGUANLIMX_ID" >
                <div class="mui-card-header">{{item.DWMC_NJ}}</div>
                <div class="mui-card-content">
                    <!-- <router-link class="mui-card-content-inner" tag="div" :to=""> -->
                    <div class="mui-card-content-inner">
                        <ul class="mui-table-view">
                            <li class="mui-table-view-cell">
                                <div class="cell-title"><span class="cell-title-text">年份</span></div>
                                <div class="cell-value"><span>{{item.NJNF_NJ | undefinedTo}}</span></div>                
                            </li>
                            <li class="mui-table-view-cell ">
                                <div class="cell-title"><span class="cell-title-text">信用评级</span></div>
                                <div class="cell-value"><span>{{item.NJPJ_NJ | undefinedTo}}</span></div>  
                            </li>
                        </ul> 
                    </div>

                    <!-- </router-link> -->
                </div>
                <div class="mui-card-footer">
                    <div class="left-button-container">
                        <mt-button class="edit-button" @click.stop="goInspectionCompanyInfo(item.QIYEXINXIGUANLIMX_ID)" size="small" type="primary">修改资料</mt-button>
                    </div>
                    <mt-button class="delete-button" size="small" @click.stop="delInspectionCompanyInfo(item.QIYEXINXIGUANLIMX_ID,index)" type="danger">删除</mt-button>
                    <!-- <a class="mui-icon edit-button" @click.stop="goEditInspectionCompany(index)" style="color: #000000; font-size:17px"><span>修改资料</span></a>
                    <a class="mui-icon inspection-button" style="color: #000000; font-size:17px"><span>企业年检</span></a>
                    <a class="mui-icon delete-button" @click.stop="goDelInspectionCompany(item.QIYENIANJIAN_ID,index)" style="color: #e6533c; font-size:17px"><span>删除</span></a> -->
                </div>
            </div>
            <!-- <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>单位名称：</label>
                    <input type="text" placeholder="输入单位名称" v-model="pd.enterpriseName">
                </div>
                <div class="mui-input-row">
                    <label>统一社会信用代码：</label>
                    <input type="text" placeholder="输入统一社会信用代码" v-model="pd.socialCreditCode">
                </div>
                <div class="mui-input-row">
                    <label>单位地址：</label>
                    <input type="text" placeholder="输入单位地址" v-model="pd.enterpriseAddress">
                </div>
                <div class="mui-input-row">
                    <label>组织机构代码：</label>
                    <input type="text" placeholder="输入组织机构代码" v-model="pd.organizationCode">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>经济类型：</label>
                    <input type="text" placeholder="输入经济类型"  v-model="pd.economicType">
                </div>
                <div class="mui-input-row">
                    <label>法定代表人：</label>
                    <input type="text" placeholder="输入法定代表人" v-model="pd.legalRepresentative">
                </div>
                <div class="mui-input-row">
                    <label>法定代表人联系电话：</label>
                    <input type="text" placeholder="输入法定代表人联系电话" v-model="pd.repreTelephone">
                </div>
                <div class="mui-input-row">
                    <label>单位负责人姓名：</label>
                    <input type="text" placeholder="输入单位负责人姓名" v-model="pd.enterpriseChargeName">
                </div>
                <div class="mui-input-row">
                    <label>单位负责人电话：</label>
                    <input type="text" placeholder="输入单位负责人电话" v-model="pd.enterpriseChargeTelephone">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                        <label>联系人：</label>
                        <input type="text" placeholder="输入联系人" v-model="pd.linkPerson">
                </div>
                <div class="mui-input-row">
                        <label>联系人电话：</label>
                        <input type="text" placeholder="输入联系人电话" v-model="pd.linkPersonTelephone">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row" data-options='{"type":"date"}' @click="openPicker('handoutDate',$event)">
                    <label data-options='{"type":"date"}'>工商登记发照日期：</label>
                    <input type="text" id="handoutDate" v-model="pd.handoutDate" data-options='{"type":"date"}' readonly="readonly">
                </div>
                <div class="mui-input-row" data-options='{"type":"date"}' @click="openPicker('effectiveDate',$event)">
                    <label data-options='{"type":"date"}'>工商登记有效期限：</label>
                    <input type="text" id="effectiveDate" v-model="pd.effectiveDate" data-options='{"type":"date"}' readonly="readonly">
                </div>
            </form>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>全日制用工人数：</label>
                    <input type="text" placeholder="输入全日制用工人数" v-model="pd.bankAccount">
                </div>
                <div class="mui-input-row">
                    <label>全日制用工已签订书面劳动合同人数：</label>
                    <input type="text" placeholder="输入全日制用工已签订书面劳动合同人数" v-model="pd.accountOpenBank">
                </div>
                <div class="mui-input-row">
                    <label>固定期限合同人数：</label>
                    <input type="text" placeholder="输入固定期限合同人数" v-model="pd.bankAccount">
                </div>
            </form>             -->
        </div>
    </div>
</template>
<script>
import { Toast, MessageBox } from 'mint-ui';

export default{
    data() {
        return {
            QIYEXINXIGUANLI_ID: this.$route.params.id,  //企业ID
            inspectionCompanyInfoList: [
            ],  //企业年检基本信息列表
            DWMC : this.$route.query.DWMC,
            page: [],			//分页类
            KEYWORDS:'',		//检索条件,关键词
            showCount: -1,		//每页显示条数(这个是系统设置里面配置的，初始为-1即可，固定此写法)
            currentPage: 1,		//当前页码
            toExcel:false,		//导出到excel权限
            loading:false,		//加载状态
        }
    },
    created() {
        // if(this.$store.state.inspectionCompanyInfoList.length > 0){
        //     this.currentPage = parseInt(this.$store.state.inspectionCompanyInfoList.length / 10) + 1;
        // }
        // else{
        //     this.getInspectionCompanyInfoList();
        // }
        // if(this.$store.state.companyInfoList.length > 0){
        //     this.currentPage = parseInt(this.$store.state.companyInfoList.length / 10) + 1;
        // }
        // else{
        //     this.getInspectionCompanyInfoList();
        // }
        this.getInspectionCompanyInfoList();
        this.$emit("pageChanged");
    },
    methods: {
        getInspectionCompanyInfoList(){
            var data = {
                KEYWORDS:this.KEYWORDS,
                QIYEXINXIGUANLI_ID:this.QIYEXINXIGUANLI_ID,
                tm:new Date().getTime()
            };
            this.$http.post('qiyexinxiguanlimx/list?showCount='+this.showCount+'&currentPage='+this.currentPage,data,{withCredentials: true}).then(
                result => {
                    if( result.body.result == "success"){
                        // if(this.currentPage <=  result.body.page.totalPage){
                        //     // this.$store.commit("pushInspectionCompanyInfo",result.body.varList);
                        //     this.$store.commit("pushCompanyInfo",result.body.varList);
                        // }
                        this.inspectionCompanyInfoList = result.body.varList;
                        this.page = result.body.page;
                    }
                    else{
                        Toast('获取企业年检基本信息失败');
                    }
                },
                error => {
                    console.log(error);
                }
            )
            // this.inspectionCompanyInfoList = this.$store.state.companyInfoList;
            // this.companyList = this.$store.state.inspectionList;
            // this.companyInfo = this.companyList[this.id];
        },
        goBack(){
			//点击后退
            // this.$router.go(-1);
            this.$router.replace('/companymanager/inspectioncompanylist');
        },
        goInspectionCompanyInfo(id){
            // console.log('goInspectionCompanyInfo')
            this.$router.push({
                path: '/companymanager/inspectioncompanyinfo/edit/'+this.QIYEXINXIGUANLI_ID+'?FID='+id,
            });
        },
        goAddInspectionCompanyInfo(){
            this.$router.push({path: '/companymanager/inspectioncompanyinfo/add/'+ this.QIYEXINXIGUANLI_ID});
        },
        delInspectionCompanyInfo(id,index){
            MessageBox.confirm("确定删除该条记录？", "提示").then(
            data => {
                var Info = {QIYEXINXIGUANLIMX_ID:id, tm:new Date().getTime()};
                this.$http.post('qiyexinxiguanlimx/delete', Info ,{withCredentials: true}).then(
                    result => {
                        if( result.body.result == "success" ){
                            // this.$store.commit("deleteCompanyInfo",index);
                        }
                        else{
                            Toast("删除信息失败");
                        }
                    },
                    error => {
                        console.log(error);
                    }
                )
                // this.$store.commit("deleteInspectionCompany",index);
                // this.getInspectionList();    
            },
            error => {
                
            }
            );
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
            /* font-size: inherit; */
            color: black;
            margin-top: 23px;
            background-color: inherit;
            font-weight: bold;
            line-height: 52px;
            padding-top: 0 ;
            padding-bottom: 0 ;
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
        .mui-card{
            border-radius: 7px; 
            .mui-card-content-inner{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 0;
            }
        }
    }
    .mui-table-view-cell{
        padding: 10px 10px;
        display: flex;
        align-items: center;
        pointer-events: none;
        .cell-title{
            -webkit-box-flex: 1;
            /* -ms-flex: 1; */
            flex: 1;
        }
        .cell-title-text{
            vertical-align: middle;
            font-size: 16px;
        }
        .cell-value{
            color: #888;
            width: 75%;
            text-align: right;
            justify-content: flex-end;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
        }
        p{
            text-align: right;
            align-items: center;
            float: right;
        }
    }
    .mui-table-view-cell::after{
        display: none;
    }
}    
</style>